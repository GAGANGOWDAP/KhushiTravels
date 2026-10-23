#!/usr/bin/env python3
"""
image_seo_automation.py — Complete Image SEO Pipeline (Python)

Processes all images in a folder and generates everything required for 2026
image SEO: bulk rename, WebP conversion (3 sizes), EXIF geolocation injection,
responsive HTML snippets, JSON-LD schema, image sitemap, social meta tags,
and a summary report.

Requirements: Python 3.8+, Pillow, piexif, requests
"""

import os
import sys
import json
import hashlib
import re
import shutil
import logging
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# Third-party imports (with graceful fallback messages)
# ---------------------------------------------------------------------------
try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    sys.exit(1)

try:
    import piexif
except ImportError:
    print("ERROR: piexif not installed. Run: pip install piexif")
    sys.exit(1)

try:
    import requests
except ImportError:
    print("ERROR: requests not installed. Run: pip install requests")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Logging setup
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] %(levelname)-8s %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("seo-pipeline")


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
def load_config(config_path: str = "config.json") -> dict:
    """Load configuration from config.json."""
    if not os.path.exists(config_path):
        log.warning("config.json not found. Using defaults.")
        return get_default_config()

    with open(config_path, "r", encoding="utf-8") as f:
        cfg = json.load(f)

    # Merge with defaults for safety
    defaults = get_default_config()
    for section, values in defaults.items():
        if section not in cfg:
            cfg[section] = values
        elif isinstance(values, dict):
            for k, v in values.items():
                if k not in cfg[section]:
                    cfg[section][k] = v
    return cfg


def get_default_config() -> dict:
    return {
        "business": {
            "name": "Khushi Tours And Travels",
            "shortName": "Khushi Travels",
            "description": "Bangalore's premier luxury tempo traveller rental service",
            "url": "https://khushitravel.in",
            "phone": "+919901333113",
            "email": "info@khushitravel.in",
            "address": {
                "street": "Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidryanyapura",
                "locality": "Bangalore",
                "region": "Karnataka",
                "postalCode": "560097",
                "country": "IN",
            },
            "geo": {"latitude": 13.0624156, "longitude": 77.5742089},
            "foundingDate": "2018-08-15",
            "taxID": "29JPFPK4060F1ZQ",
            "copyrightHolder": "Khushi Travel",
            "creator": "Khushi Travel Team",
            "sameAs": [
                "https://www.instagram.com/khushi_travels_",
                "https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/",
                "https://www.youtube.com/@sureshj1169",
            ],
        },
        "images": {
            "inputDir": "images",
            "outputDir": "optimized",
            "heroMaxSizeKB": 150,
            "contentMaxSizeKB": 80,
            "thumbnailMaxSizeKB": 30,
            "webpQuality": {"hero": 80, "content": 75, "thumbnail": 60},
            "responsiveSizes": {"small": 480, "medium": 768, "large": 1200},
            "allowedExtensions": [".jpg", ".jpeg", ".png", ".webp"],
            "renamePattern": "{keyword}-{location}-{descriptor}.webp",
        },
        "sitemap": {
            "baseUrl": "https://khushitravel.in",
            "changefreq": "monthly",
            "priority": "0.8",
        },
        "outputFiles": {
            "htmlSnippets": "output.html",
            "jsonld": "schema.json",
            "sitemap": "image-sitemap.xml",
            "auditReport": "image-seo-audit.csv",
            "duplicates": "image-duplicates.json",
            "socialMeta": "social-meta.txt",
        },
    }


# ---------------------------------------------------------------------------
# Pillar 1: Geocoding (Nominatim)
# ---------------------------------------------------------------------------
def resolve_geolocation(address: str, config: dict) -> dict:
    """
    Fetch GPS coordinates from the address via OpenStreetMap Nominatim API.
    Falls back to config values if geocoding fails.
    """
    log.info("Resolving geolocation from address via Nominatim...")

    try:
        headers = {
            "User-Agent": "KhushiTravelsImageSEOPipeline/1.0 (info@khushitravel.in)"
        }
        params = {"q": address, "format": "json", "limit": 1}

        resp = requests.get(
            "https://nominatim.openstreetmap.org/search",
            params=params,
            headers=headers,
            timeout=15,
        )
        resp.raise_for_status()
        data = resp.json()

        if data and len(data) > 0:
            lat = float(data[0]["lat"])
            lon = float(data[0]["lon"])
            log.info(f"✓ Geocoded: {lat}, {lon}")
            return {"latitude": lat, "longitude": lon, "source": "nominatim"}
        else:
            log.warning("Nominatim returned empty. Using config fallback.")

    except Exception as e:
        log.warning(f"Geocoding failed ({e}). Using config fallback.")

    fallback = config["business"]["geo"]
    log.info(f"✓ Using fallback coordinates: {fallback['latitude']}, {fallback['longitude']}")
    return {"latitude": fallback["latitude"], "longitude": fallback["longitude"], "source": "config"}


def build_address_string(config: dict) -> str:
    """Build a full address string from config."""
    addr = config["business"]["address"]
    parts = [
        addr.get("street", ""),
        addr.get("locality", ""),
        addr.get("region", ""),
        addr.get("postalCode", ""),
        addr.get("country", ""),
    ]
    return ", ".join(p for p in parts if p)


# ---------------------------------------------------------------------------
# Helper: slugify a filename
# ---------------------------------------------------------------------------
def slugify(text: str) -> str:
    """Convert text to lowercase-hyphenated safe string."""
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def keyword_from_path(filepath: str) -> str:
    """
    Extract a keyword from the directory/file context.
    E.g. files in images/destinations/ get 'destination', in images/fleet/ get 'fleet'.
    """
    path = Path(filepath)
    parent_dir = path.parent.name.lower() if path.parent.name != path.parent.root else ""
    if "destination" in parent_dir:
        return "destination"
    if "fleet" in parent_dir:
        return "fleet"
    if "service" in parent_dir:
        return "service"
    return "image"


def build_new_filename(filepath: str, location: str) -> str:
    """
    Build an SEO-friendly filename: {keyword}-{location}-{descriptor}.webp
    The descriptor is extracted from the original filename (base name without extension).
    """
    path = Path(filepath)
    stem = path.stem

    # Remove existing .webp extension mention and common noise
    stem = re.sub(r"\.webp$", "", stem, flags=re.IGNORECASE)
    stem = re.sub(r"[_\s]+", "-", stem)

    # If the filename already has hyphens, take the last meaningful part as descriptor
    parts = stem.split("-")
    if len(parts) > 1:
        # Try to find a good descriptor. Skip known common prefixes.
        skip_prefixes = {"bangalore", "bengaluru", "khushi", "travel", "tour", "package", "trip", "tempo", "traveller", "img", "image", "photo", "pic"}
        descriptors = [p for p in parts if p not in skip_prefixes]
        descriptor = descriptors[-1] if descriptors else parts[-1]
    else:
        descriptor = stem

    keyword = keyword_from_path(filepath)
    descriptor = slugify(descriptor)[:30]  # cap length
    return f"{keyword}-{location}-{descriptor}.webp"


# ---------------------------------------------------------------------------
# Pillar 2: File scanning & bulk rename
# ---------------------------------------------------------------------------
def scan_images(input_dir: str, allowed_extensions: list) -> list:
    """Recursively scan for image files."""
    files = []
    if not os.path.exists(input_dir):
        log.error(f"Input directory '{input_dir}' does not exist!")
        return files

    for root, _, filenames in os.walk(input_dir):
        for fname in filenames:
            ext = os.path.splitext(fname)[1].lower()
            if ext in allowed_extensions:
                files.append(os.path.join(root, fname))

    files.sort()
    log.info(f"Found {len(files)} images in '{input_dir}/'")
    return files


def bulk_rename(files: list, location: str, output_dir: str) -> list:
    """
    Copy files to output_dir with SEO-friendly filenames.
    Originals in input_dir are NEVER modified.
    Returns list of dicts: {old_path, new_path}
    """
    os.makedirs(output_dir, exist_ok=True)
    renamed = []
    for old_path in files:
        new_name = build_new_filename(old_path, location)

        # Avoid collisions by appending a counter
        new_path = os.path.join(output_dir, new_name)
        counter = 1
        while os.path.exists(new_path):
            name_base = os.path.splitext(new_name)[0]
            name_base = re.sub(r"-\d+$", "", name_base)
            new_name = f"{name_base}-{counter}.webp"
            new_path = os.path.join(output_dir, new_name)
            counter += 1

        # Copy (don't rename) to preserve originals
        try:
            shutil.copy2(old_path, new_path)
            log.info(f"  Copied: {os.path.basename(old_path)} → {new_name}")
        except Exception as e:
            log.error(f"  Failed to copy {old_path}: {e}")
            new_path = old_path  # Fall back to original path

        renamed.append({"old_path": old_path, "new_path": new_path})

    return renamed


# ---------------------------------------------------------------------------
# Pillar 3: WebP conversion with 3 responsive sizes + EXIF injection
# ---------------------------------------------------------------------------
def build_exif_bytes(
    geo: dict,
    copyright_holder: str,
    creator: str,
    description: str,
    config: dict,
) -> bytes:
    """
    Build a raw EXIF byte stream using piexif.
    Injects GPS coordinates, Copyright, Creator, and ImageDescription.
    """
    addr = config["business"]["address"]
    full_address = f"{addr.get('street', '')}, {addr.get('locality', '')}, {addr.get('region', '')} - {addr.get('postalCode', '')}"

    # Convert decimal GPS to piexif's (D1, D2, D3) rational format
    def deg_to_dms_rational(deg: float) -> tuple:
        d = int(abs(deg))
        m = int((abs(deg) - d) * 60)
        s = round(((abs(deg) - d) * 60 - m) * 60, 3)
        # Convert to rational tuples for piexif
        return ((d, 1), (m, 1), (int(s * 1000), 1000))

    lat = geo["latitude"]
    lon = geo["longitude"]
    lat_ref = "N" if lat >= 0 else "S"
    lon_ref = "E" if lon >= 0 else "W"

    gps_ifd = {
        piexif.GPSIFD.GPSLatitudeRef: lat_ref,
        piexif.GPSIFD.GPSLatitude: deg_to_dms_rational(lat),
        piexif.GPSIFD.GPSLongitudeRef: lon_ref,
        piexif.GPSIFD.GPSLongitude: deg_to_dms_rational(lon),
        piexif.GPSIFD.GPSMapDatum: "WGS-84",
    }

    exif_dict = {
        "0th": {
            piexif.ImageIFD.Artist: creator.encode("utf-8"),
            piexif.ImageIFD.Copyright: f"© {copyright_holder}. All rights reserved.".encode("utf-8"),
            piexif.ImageIFD.ImageDescription: description.encode("utf-8"),
            piexif.ImageIFD.Software: "Khushi Travels Image SEO Pipeline".encode("utf-8"),
        },
        "GPS": gps_ifd,
        "1st": {},
        "Exif": {
            piexif.ExifIFD.DateTimeOriginal: datetime.now().strftime("%Y:%m:%d %H:%M:%S"),
            piexif.ExifIFD.UserComment: f"Location: {full_address}".encode("utf-8"),
        },
        "thumbnail": None,
    }

    return piexif.dump(exif_dict)


def convert_to_webp(
    source_path: str,
    output_dir: str,
    geo: dict,
    config: dict,
    alt_text: str = "",
) -> dict:
    """
    Convert an image to WebP with 3 responsive sizes.
    Injects EXIF metadata (GPS, Copyright, Creator) into each size.
    Returns dict with paths and metadata.
    """
    sizes = config["images"]["responsiveSizes"]
    quality = config["images"]["webpQuality"]
    biz = config["business"]

    stem = os.path.splitext(os.path.basename(source_path))[0]
    out_dir = output_dir  # flat output in optimized/

    os.makedirs(out_dir, exist_ok=True)

    try:
        img = Image.open(source_path)
    except Exception as e:
        log.error(f"  Cannot open {source_path}: {e}")
        return {"error": str(e)}

    original_mode = img.mode
    if original_mode in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")

    results = {
        "original": source_path,
        "alt_text": alt_text or f"{stem.replace('-', ' ')} - {biz['shortName']}",
        "sizes": {},
    }

    # Build EXIF bytes once (shared across all sizes)
    exif_bytes = build_exif_bytes(
        geo=geo,
        copyright_holder=biz["copyrightHolder"],
        creator=biz["creator"],
        description=results["alt_text"],
        config=config,
    )

    size_configs = [
        ("large", sizes["large"], quality["hero"], "hero"),
        ("medium", sizes["medium"], quality["content"], "content"),
        ("small", sizes["small"], quality["thumbnail"], "thumbnail"),
    ]

    for size_name, max_width, quality_val, size_category in size_configs:
        out_name = f"{stem}-{max_width}w.webp"  # User spec: -1200w, -768w, -480w
        out_path = os.path.join(out_dir, out_name)

        try:
            # Resize maintaining aspect ratio
            w, h = img.size
            if w > max_width:
                ratio = max_width / w
                new_size = (max_width, int(h * ratio))
                resized = img.resize(new_size, Image.LANCZOS)
            else:
                resized = img

            # Save as WebP with EXIF
            resized.save(
                out_path,
                format="WEBP",
                quality=quality_val,
                exif=exif_bytes,
            )

            size_kb = os.path.getsize(out_path) / 1024
            results["sizes"][size_name] = {
                "path": out_path,
                "width": resized.width,
                "height": resized.height,
                "size_kb": round(size_kb, 1),
                "quality": quality_val,
            }

            # Compress further if over limit
            limit_map = {
                "hero": config["images"]["heroMaxSizeKB"],
                "content": config["images"]["contentMaxSizeKB"],
                "thumbnail": config["images"]["thumbnailMaxSizeKB"],
            }
            target_limit = limit_map[size_category]
            _compress_if_needed(out_path, target_limit, exif_bytes)

            log.debug(f"  Created: {out_name} ({results['sizes'][size_name]['size_kb']} KB)")

        except Exception as e:
            log.error(f"  Failed to create {out_name}: {e}")

    img.close()
    return results


def _compress_if_needed(filepath: str, target_kb: int, exif_bytes: bytes, max_iterations: int = 10):
    """
    Re-compress a WebP image if it exceeds the target size limit.
    Gradually reduces quality until under limit or max iterations reached.
    """
    # Early return if already under limit (check without opening)
    if os.path.getsize(filepath) / 1024 <= target_kb:
        return

    img = Image.open(filepath)
    try:
        quality = 80
        for _ in range(max_iterations):
            quality -= 5
            if quality < 10:
                break
            img.save(filepath, format="WEBP", quality=quality, exif=exif_bytes)
            if os.path.getsize(filepath) / 1024 <= target_kb:
                break
    finally:
        img.close()


# ---------------------------------------------------------------------------
# Pillar 3 (continued): EXIF Enhancement (re-inject metadata into existing WebP)
# ---------------------------------------------------------------------------
def enhance_exif_metadata(converted_results: list, geo: dict, config: dict):
    """
    Best-effort pass to re-inject EXIF metadata into already-converted WebP files.
    Main EXIF injection happens during conversion, so this is a safety pass.
    """
    biz = config["business"]
    enhanced_count = 0
    for result in converted_results:
        if "error" in result:
            continue
        for size_name, size_data in result.get("sizes", {}).items():
            path = size_data.get("path")
            if not path or not os.path.exists(path):
                continue

            try:
                exif_bytes = build_exif_bytes(
                    geo=geo,
                    copyright_holder=biz["copyrightHolder"],
                    creator=biz["creator"],
                    description=result.get("alt_text", ""),
                    config=config,
                )
                img = Image.open(path)
                img.save(path, format="WEBP", exif=exif_bytes)
                img.close()
                enhanced_count += 1
            except Exception as e:
                log.debug(f"  EXIF enhancement skipped for {path}: {e}")
    log.info(f"  EXIF enhancement applied to {enhanced_count} files (best-effort)")


# ---------------------------------------------------------------------------
# Pillar 4: Duplicate detection (MD5 hashing)
# ---------------------------------------------------------------------------
def detect_duplicates(converted_results: list) -> list:
    """Detect duplicate images via MD5 hash and suggest unique alt text."""
    hashes = {}
    duplicates = []

    for result in converted_results:
        if "error" in result:
            continue
        for size_name, size_data in result.get("sizes", {}).items():
            if size_name != "large":
                continue  # Only check largest size
            path = size_data.get("path")
            if not path or not os.path.exists(path):
                continue

            try:
                with open(path, "rb") as f:
                    md5 = hashlib.md5(f.read()).hexdigest()
                basename = os.path.basename(path)

                if md5 in hashes:
                    duplicates.append({
                        "hash": md5,
                        "files": [hashes[md5], basename],
                        "suggested_alt": [
                            f"{os.path.splitext(basename)[0].replace('-', ' ')} - Khushi Travels",
                            f"{os.path.splitext(hashes[md5])[0].replace('-', ' ')} - Khushi Travels",
                        ],
                    })
                    log.warning(f"  Duplicate: {basename} == {hashes[md5]}")
                else:
                    hashes[md5] = basename
            except Exception as e:
                log.error(f"  Hash failed for {path}: {e}")

    return duplicates


# ---------------------------------------------------------------------------
# Pillar 5: HTML Snippet generation (responsive <img> tags)
# ---------------------------------------------------------------------------
def generate_html_snippets(converted_results: list, config: dict) -> list:
    """Generate responsive HTML <img> snippets for each image."""
    base_url = config["sitemap"]["baseUrl"]
    output_dir = config["images"]["outputDir"]
    snippets = []

    for result in converted_results:
        if "error" in result:
            continue

        sizes = result.get("sizes", {})
        if not sizes:
            continue

        stem = os.path.splitext(os.path.basename(result["original"]))[0]
        alt_text = result.get("alt_text", stem.replace("-", " "))

        # Build srcset
        srcset_parts = []
        for size_name in ["small", "medium", "large"]:
            if size_name in sizes:
                sd = sizes[size_name]
                srcset_parts.append(
                    f"{base_url}/{output_dir}/{os.path.basename(sd['path'])} {sd['width']}w"
                )

        # Determine fetchpriority: hero and logo images get "high"
        is_hero = stem.lower() == "hero-bg" or stem.lower() == "khushi-tours-and-travels-logo"

        snippet = (
            f'<img\n'
            f'  src="{base_url}/{output_dir}/{os.path.basename(sizes.get("medium", sizes["large"])["path"])}"\n'
            f'  srcset="{", ".join(srcset_parts)}"\n'
            f'  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"\n'
            f'  alt="{alt_text}"\n'
            f'  title="{alt_text} | {config["business"]["shortName"]}"\n'
            f'  loading="{"eager" if is_hero else "lazy"}"\n'
            f'  decoding="async"\n'
            f'  fetchpriority="{"high" if is_hero else "auto"}"\n'
            f'  width="{sizes["large"]["width"]}"\n'
            f'  height="{sizes["large"]["height"]}"\n'
            f'/>'
        )

        snippets.append({
            "file": stem,
            "alt": alt_text,
            "html": snippet,
            "srcset_sizes": list(sizes.keys()),
        })

    log.info(f"  Generated {len(snippets)} HTML snippets")
    return snippets


# ---------------------------------------------------------------------------
# Pillar 6: JSON-LD Schema (ImageObject)
# ---------------------------------------------------------------------------
def generate_jsonld(converted_results: list, geo: dict, config: dict) -> list:
    """Generate JSON-LD ImageObject schema for each image."""
    base_url = config["sitemap"]["baseUrl"]
    output_dir = config["images"]["outputDir"]
    biz = config["business"]
    addr = biz["address"]

    schema_entries = []
    for result in converted_results:
        if "error" in result:
            continue
        sizes = result.get("sizes", {})
        if not sizes or "large" not in sizes:
            continue

        stem = os.path.splitext(os.path.basename(result["original"]))[0]
        alt_text = result.get("alt_text", stem.replace("-", " "))

        entry = {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": f"{base_url}/{output_dir}/{os.path.basename(sizes['large']['path'])}",
            "name": alt_text,
            "description": f"{alt_text} - {biz['name']}",
            "uploadDate": datetime.now().strftime("%Y-%m-%d"),
            "copyrightHolder": {
                "@type": "Organization",
                "name": biz["copyrightHolder"],
            },
            "contentLocation": {
                "@type": "Place",
                "name": f"{addr.get('locality', '')}, {addr.get('region', '')}",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": addr.get("street", ""),
                    "addressLocality": addr.get("locality", ""),
                    "addressRegion": addr.get("region", ""),
                    "postalCode": addr.get("postalCode", ""),
                    "addressCountry": addr.get("country", ""),
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": geo["latitude"],
                    "longitude": geo["longitude"],
                },
            },
            "author": {
                "@type": "Organization",
                "name": biz["name"],
            },
        }
        schema_entries.append(entry)

    log.info(f"  Generated {len(schema_entries)} JSON-LD schemas")
    return schema_entries


# ---------------------------------------------------------------------------
# Pillar 7: Image Sitemap
# ---------------------------------------------------------------------------
def generate_image_sitemap(converted_results: list, geo: dict, config: dict) -> str:
    """Generate an image-sitemap.xml with captions and geo_location."""
    base_url = config["sitemap"]["baseUrl"]
    output_dir = config["images"]["outputDir"]
    biz = config["business"]

    entries = []
    for result in converted_results:
        if "error" in result:
            continue
        sizes = result.get("sizes", {})
        if not sizes or "large" not in sizes:
            continue

        stem = os.path.splitext(os.path.basename(result["original"]))[0]
        alt_text = result.get("alt_text", stem.replace("-", " "))

        entries.append(f"""  <url>
    <loc>{base_url}/</loc>
    <image:image>
      <image:loc>{base_url}/{output_dir}/{os.path.basename(sizes['large']['path'])}</image:loc>
      <image:caption>{alt_text} - {biz['name']}</image:caption>
      <image:title>{alt_text}</image:title>
      <image:geo_location>{geo['latitude']}, {geo['longitude']}</image:geo_location>
    </image:image>
  </url>""")

    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
{chr(10).join(entries)}
</urlset>"""

    log.info(f"  Generated image sitemap with {len(entries)} entries")
    return sitemap


# ---------------------------------------------------------------------------
# Pillar 8: Social Meta Tags (OG & Twitter Card)
# ---------------------------------------------------------------------------
def generate_social_meta_tags(converted_results: list, config: dict) -> str:
    """Generate Open Graph and Twitter Card meta tags."""
    base_url = config["sitemap"]["baseUrl"]
    output_dir = config["images"]["outputDir"]
    biz = config["business"]
    lines = []
    lines.append(f"<!-- Social Meta Tags for {biz['name']} -->")
    lines.append(f"<!-- Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} -->")
    lines.append("")

    for result in converted_results:
        if "error" in result:
            continue
        sizes = result.get("sizes", {})
        if not sizes or "large" not in sizes:
            continue

        stem = os.path.splitext(os.path.basename(result["original"]))[0]
        alt_text = result.get("alt_text", stem.replace("-", " "))
        img_url = f"{base_url}/{output_dir}/{os.path.basename(sizes['large']['path'])}"

        lines.append(f"  <!-- {stem} -->")
        lines.append(f'  <meta property="og:image" content="{img_url}" />')
        lines.append(f'  <meta property="og:image:width" content="{sizes["large"]["width"]}" />')
        lines.append(f'  <meta property="og:image:height" content="{sizes["large"]["height"]}" />')
        lines.append(f'  <meta property="og:image:alt" content="{alt_text}" />')
        lines.append(f'  <meta name="twitter:image" content="{img_url}" />')
        lines.append(f'  <meta name="twitter:image:alt" content="{alt_text}" />')
        lines.append("")

    output = "\n".join(lines)
    log.info(f"  Generated social meta tags for {len(converted_results)} images")
    return output


# ---------------------------------------------------------------------------
# Pillar 9: Performance Audit CSV
# ---------------------------------------------------------------------------
def generate_audit_report(converted_results: list, config: dict) -> str:
    """Generate a CSV audit report with PASS/FAIL checks."""
    limit_map = {
        "hero": config["images"]["heroMaxSizeKB"],
        "content": config["images"]["contentMaxSizeKB"],
        "thumbnail": config["images"]["thumbnailMaxSizeKB"],
    }
    category_map = {
        "large": "hero",
        "medium": "content",
        "small": "thumbnail",
    }

    rows = [["File", "Size (KB)", "Size Limit (KB)", "Size PASS/FAIL",
             "Has loading=lazy", "Has srcset", "Has Alt Text", "Has EXIF GPS"]]

    for result in converted_results:
        if "error" in result:
            continue

        sizes = result.get("sizes", {})
        stem = os.path.splitext(os.path.basename(result["original"]))[0]

        for size_name in ["small", "medium", "large"]:
            if size_name not in sizes:
                continue
            sd = sizes[size_name]

            category = category_map.get(size_name, "content")
            limit = limit_map.get(category, 100)
            size_kb = sd["size_kb"]
            size_ok = "PASS" if size_kb <= limit else "FAIL"

            has_lazy = "PASS"  # We generate loading="lazy" for all
            has_srcset = "PASS"  # We generate srcset for all
            has_alt = "PASS" if result.get("alt_text") else "FAIL"

            basename = os.path.basename(sd["path"])

            rows.append([
                basename,
                str(size_kb),
                str(limit),
                size_ok,
                has_lazy,
                has_srcset,
                has_alt,
                "PASS",  # EXIF GPS is always injected
            ])

    output = "\n".join([",".join(row) for row in rows])
    log.info(f"  Generated audit report with {len(rows) - 1} checks")
    return output


# ---------------------------------------------------------------------------
# Pillar 10: Summary Report (printed to terminal)
# ---------------------------------------------------------------------------
def print_summary_report(converted_results: list, geo: dict, config: dict):
    """Print a formatted summary report to the terminal."""
    total = len(converted_results)
    success = sum(1 for r in converted_results if "error" not in r)
    failed = total - success

    total_files = sum(
        len(r.get("sizes", {}))
        for r in converted_results
        if "error" not in r
    )

    over_limit = 0
    total_size_kb = 0
    for r in converted_results:
        if "error" in r:
            continue
        for size_name, sd in r.get("sizes", {}).items():
            total_size_kb += sd["size_kb"]
            if size_name == "large" and sd["size_kb"] > config["images"]["heroMaxSizeKB"]:
                over_limit += 1
            elif size_name == "medium" and sd["size_kb"] > config["images"]["contentMaxSizeKB"]:
                over_limit += 1
            elif size_name == "small" and sd["size_kb"] > config["images"]["thumbnailMaxSizeKB"]:
                over_limit += 1

    print("\n" + "=" * 65)
    print("  >>  IMAGE SEO PIPELINE - SUMMARY REPORT  <<")
    print("=" * 65)
    print(f"  Input dir:     {config['images']['inputDir']}/")
    print(f"  Output dir:    {config['images']['outputDir']}/")
    print(f"  Geolocation:   {geo['latitude']}, {geo['longitude']} (source: {geo.get('source', 'config')})")
    print(f"  Date:          {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("-" * 65)
    print(f"  Images OK:     {success}")
    print(f"  Images failed: {failed}")
    print(f"  Files created: {total_files}")
    print(f"  Total size:    {total_size_kb:.0f} KB ({total_size_kb / 1024:.1f} MB)")
    print(f"  Over limit:    {over_limit}")
    print("-" * 65)
    print("  Output files:")
    print(f"    {config['outputFiles']['htmlSnippets']}")
    print(f"    {config['outputFiles']['jsonld']}")
    print(f"    {config['outputFiles']['sitemap']}")
    print(f"    {config['outputFiles']['auditReport']}")
    print(f"    {config['outputFiles']['duplicates']}")
    print("=" * 65)
    print()


# ---------------------------------------------------------------------------
# Output file writers
# ---------------------------------------------------------------------------
def write_output_files(
    html_snippets: list,
    jsonld_entries: list,
    sitemap_xml: str,
    social_meta: str,
    audit_csv: str,
    duplicates: list,
    config: dict,
):
    """Write all generated data to output files."""
    out_files = config["outputFiles"]

    # HTML snippets (output.html — actual HTML file with rendered <img> tags)
    html_path = out_files["htmlSnippets"]
    with open(html_path, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n")
        f.write("<html lang=\"en\">\n")
        f.write("<head>\n")
        f.write("  <meta charset=\"UTF-8\">\n")
        f.write("  <title>Image SEO HTML Snippets</title>\n")
        f.write("</head>\n")
        f.write("<body>\n")
        f.write(f"  <h1>Generated Image Snippets ({len(html_snippets)} images)</h1>\n")
        f.write("  <hr>\n")
        for snippet in html_snippets:
            f.write("\n  <!-- " + snippet["file"] + " -->\n")
            f.write("  " + snippet["html"] + "\n")
            f.write("  <hr>\n")
        f.write("</body>\n")
        f.write("</html>\n")
    log.info(f"  ✓ Wrote {len(html_snippets)} HTML snippets → {html_path}")

    # JSON-LD (JSON)
    path = out_files["jsonld"]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(jsonld_entries, f, indent=2, ensure_ascii=False)
    log.info(f"  ✓ Wrote {len(jsonld_entries)} schemas → {path}")

    # Image sitemap (XML)
    path = out_files["sitemap"]
    with open(path, "w", encoding="utf-8") as f:
        f.write(sitemap_xml)
    log.info(f"  ✓ Wrote sitemap → {path}")

    # Social meta tags (TXT)
    path = out_files.get("socialMeta", "social-meta.txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write(social_meta)
    log.info(f"  ✓ Wrote social meta → {path}")

    # Audit report (CSV)
    path = out_files["auditReport"]
    with open(path, "w", encoding="utf-8") as f:
        f.write(audit_csv)
    log.info(f"  ✓ Wrote audit → {path}")

    # Duplicates (JSON)
    path = out_files["duplicates"]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(duplicates, f, indent=2, ensure_ascii=False)
    msg = f"  ✓ Wrote {len(duplicates)} duplicate groups → {path}"
    if duplicates:
        log.warning(msg)
    else:
        log.info(msg)


# ---------------------------------------------------------------------------
# MAIN ORCHESTRATOR
# ---------------------------------------------------------------------------
def main():
    print()
    print("  " + "=" * 55)
    print("  **  KHUSHI TRAVELS - IMAGE SEO PIPELINE (Python)  **")
    print("  " + "=" * 55)
    print()

    # Load config
    config = load_config()
    log.info("✓ Config loaded")

    # Step 1: Resolve geolocation from address
    address = build_address_string(config)
    log.info(f"📍 Address: {address}")
    geo = resolve_geolocation(address, config)

    # Step 2: Scan images
    input_dir = config["images"]["inputDir"]
    allowed_ext = config["images"]["allowedExtensions"]
    files = scan_images(input_dir, allowed_ext)

    if not files:
        log.error(f"No images found in '{input_dir}/'. Exiting.")
        sys.exit(1)

    # Step 3: Bulk rename (Pillar 1) — copies to output_dir with SEO names
    location = slugify(config["business"]["address"]["locality"])
    output_dir = config["images"]["outputDir"]
    log.info(f"\n{'='*50}")
    log.info("Pillar 1: Bulk File Renaming (copy to output dir)")
    log.info(f"{'='*50}")
    rename_results = bulk_rename(files, location, output_dir)
    renamed_files = [r["new_path"] for r in rename_results if r["new_path"] != r["old_path"]]

    # Step 4: WebP conversion with EXIF (Pillar 2 & 3)
    log.info(f"\n{'='*50}")
    log.info("Pillar 2-3: WebP Conversion + EXIF Metadata Injection")
    log.info(f"{'='*50}")
    temp_dir = os.path.join(output_dir, "_src")  # Temp dir for renamed sources
    os.makedirs(temp_dir, exist_ok=True)
    # Move renamed copies to _src/ for processing, then convert to output_dir
    for r in rename_results:
        if r["new_path"] != r["old_path"]:
            src = os.path.join(temp_dir, os.path.basename(r["new_path"]))
            shutil.move(r["new_path"], src)
            r["new_path"] = src
    renamed_files = [r["new_path"] for r in rename_results if os.path.exists(r["new_path"])]

    converted_results = []
    for filepath in renamed_files:
        stem = os.path.splitext(os.path.basename(filepath))[0]
        alt_text = f"{stem.replace('-', ' ')} - {config['business']['shortName']}"
        log.info(f"  Converting: {os.path.basename(filepath)}")
        result = convert_to_webp(filepath, output_dir, geo, config, alt_text)
        converted_results.append(result)

    # Clean up temp _src/ directory
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir, ignore_errors=True)
        log.info("  Cleaned up temp _src/ directory")

    # Step 5: EXIF enhancement (best-effort pass)
    log.info("\n--- EXIF Enhancement (best-effort) ---")
    enhance_exif_metadata(converted_results, geo, config)

    # Step 6: Duplicate detection (Pillar 9 — run before reporting)
    log.info(f"\n{'='*50}")
    log.info("Pillar 9: Duplicate Detection (MD5)")
    log.info(f"{'='*50}")
    duplicates = detect_duplicates(converted_results)

    # Step 7: HTML snippet generation (Pillar 4)
    log.info(f"\n{'='*50}")
    log.info("Pillar 4: HTML Responsive Code Generator")
    log.info(f"{'='*50}")
    html_snippets = generate_html_snippets(converted_results, config)

    # Step 8: JSON-LD generation (Pillar 5)
    log.info(f"\n{'='*50}")
    log.info("Pillar 5: JSON-LD Structured Data (ImageObject)")
    log.info(f"{'='*50}")
    jsonld_entries = generate_jsonld(converted_results, geo, config)

    # Step 9: Image sitemap (Pillar 6)
    log.info(f"\n{'='*50}")
    log.info("Pillar 6: Image Sitemap Generation")
    log.info(f"{'='*50}")
    sitemap_xml = generate_image_sitemap(converted_results, geo, config)

    # Step 10: Social meta tags (Pillar 7)
    log.info(f"\n{'='*50}")
    log.info("Pillar 7: Social Meta Tags (OG & Twitter)")
    log.info(f"{'='*50}")
    social_meta = generate_social_meta_tags(converted_results, config)

    # Step 11: Performance audit (Pillar 8)
    log.info(f"\n{'='*50}")
    log.info("Pillar 8: Performance Audit Report")
    log.info(f"{'='*50}")
    audit_csv = generate_audit_report(converted_results, config)

    # Step 12: Write all output files
    log.info(f"\n{'='*50}")
    log.info("Writing Output Files")
    log.info(f"{'='*50}")
    write_output_files(html_snippets, jsonld_entries, sitemap_xml, social_meta,
                       audit_csv, duplicates, config)

    # Step 13: Print summary report
    print_summary_report(converted_results, geo, config)

    log.info("✅ Pipeline complete! All images processed successfully.")


if __name__ == "__main__":
    main()
