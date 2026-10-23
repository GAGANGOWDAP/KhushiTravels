# Image SEO Automation Pipeline (Python)

A complete image SEO pipeline that processes all images in a folder and generates everything needed for 2026 image SEO rankings.

## Quick Start

```bash
# 1. Install dependencies
pip install Pillow piexif requests

# 2. Run the pipeline
python image_seo_automation.py
```

## What It Does

| # | Step | Output |
|---|------|--------|
| 1 | **Geocoding** — Fetches GPS from address via Nominatim API | Coordinates logged |
| 2 | **Bulk Rename** — Copies images to `optimized/` with SEO names | `optimized/_src/` (temp) |
| 3 | **WebP Conversion** — 3 responsive sizes (1200w, 768w, 480w) + EXIF metadata | `optimized/*.webp` |
| 4 | **EXIF Injection** — GPS, Copyright, Creator, ImageDescription | Embedded in WebP files |
| 5 | **Compression** — Heroes <150KB, content <80KB, thumbnails <30KB | Auto-adjusted quality |
| 6 | **HTML Snippets** — `<img>` tags with srcset, loading=lazy, decoding=async | `output.html` |
| 7 | **JSON-LD Schema** — ImageObject with full address & geo | `schema.json` |
| 8 | **Image Sitemap** — XML with caption & geo_location | `image-sitemap.xml` |
| 9 | **Social Meta Tags** — OG & Twitter Card tags | `social-meta.txt` |
| 10 | **Performance Audit** — CSV with PASS/FAIL size checks | `image-seo-audit.csv` |

## Configuration

Edit `config.json` to customize:

- **Business info** — name, address, phone, GPS coordinates
- **Image limits** — heroMaxSizeKB, contentMaxSizeKB, thumbnailMaxSizeKB
- **Quality** — webpQuality (hero/content/thumbnail)
- **Sizes** — responsiveSizes (small/medium/large in pixels)
- **Output files** — filenames for all generated outputs

## Notes

- **Originals are NEVER modified** — all output goes to `optimized/`
- Files with spaces or special chars in names are fixed during rename
- MD5 duplicate detection logs identical images with alt text suggestions
