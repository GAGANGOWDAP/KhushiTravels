# 🚀 Khushi Travels Image SEO Pipeline 2026

> A complete 9-pillar Image SEO automation pipeline for ranking in Google Search & AI Overviews (SGE).

## 📋 Prerequisites

- **Node.js** 18+ (check: `node --version`)
- **npm** 9+ (check: `npm --version`)

## ⚡ Quick Start

```bash
# 1. Install dependencies (only sharp needed)
npm install sharp

# 2. Configure your business details in config.json
#    Edit address, GPS, size limits, quality settings

# 3. Run the pipeline (keeps original filenames intact)
node scripts/master_seo_pipeline.js
```

All optimized images go to `optimized/` folder. Original images are never modified.

## 📦 What It Does (9 Pillars)

| # | Pillar | What It Creates | File |
|---|--------|----------------|------|
| 1 | **Filename Sanitization** | Scans filenames (no renaming — preserves HTML refs) | — (read-only) |
| 2 | **WebP Conversion** | Compressed WebP with size limits | `optimized/*.webp` |
| 3 | **EXIF/IPTC Metadata** | GPS coords, copyright, creator, keywords | (injected into WebP) |
| 4 | **Responsive HTML** | `<img>` with `srcset`, `sizes`, `loading=lazy` | `optimized/seo-image-snippets.json` |
| 5 | **JSON-LD Schema** | `ImageObject` schema with geo/copyright | `optimized/image-jsonld.json` |
| 6 | **Image Sitemap** | XML sitemap with captions & geo tags | `image-sitemap.xml` |
| 7 | **Social Meta Tags** | OG & Twitter Card meta tags | `optimized/social-meta-tags.txt` |
| 8 | **Performance Audit** | CSV report (PASS/FAIL for size, alt, srcset) | `image-seo-audit.csv` |
| 9 | **Duplicate Detection** | MD5 hash dedup + alt text suggestions | `image-duplicates.json` |

## ⚙️ Configuration (`config.json`)

```json
{
  "business": {
    "name": "Khushi Tours And Travels",
    "url": "https://khushitravel.in",
    "phone": "+919901333113",
    "address": {
      "street": "Ground Floor No: 2, Kodigehalli Main Road...",
      "locality": "Bangalore",
      "region": "Karnataka",
      "postalCode": "560097",
      "country": "IN"
    },
    "geo": {
      "latitude": 13.0624156,
      "longitude": 77.5742089
    }
  },
  "images": {
    "heroMaxSizeKB": 150,
    "contentMaxSizeKB": 80,
    "thumbnailMaxSizeKB": 30,
    "webpQuality": { "hero": 80, "content": 75, "thumbnail": 60 },
    "responsiveSizes": { "small": 480, "medium": 768, "large": 1200 }
  }
}
```

### Key Settings to Customize

| Setting | Description | Default |
|---------|-------------|---------|
| `images.heroMaxSizeKB` | Max size for hero/banner images | 150 KB |
| `images.contentMaxSizeKB` | Max size for content images | 80 KB |
| `images.thumbnailMaxSizeKB` | Max size for thumbnails | 30 KB |
| `business.geo.latitude` | Your office latitude (auto-fetched) | 13.0624156 |
| `business.geo.longitude` | Your office longitude | 77.5742089 |

## 📂 Project Folder Structure

```
khushitravel.in/
├── index.html                           ← Homepage
├── best-tempo-traveller-fleet-bangalore.html
├── tour-packages-from-bangalore.html
├── tempo-traveller-rent-price-bangalore.html
├── hire-tempo-traveller-bangalore.html
├── spiritual-pilgrimage-tours.html
├── pilgrimage-packages.html
├── terms.html & privacy.html
├── 404.html                             ← Custom 404 error page
├── config.json                          ← Business & SEO configuration
├── sitemap.xml & image-sitemap.xml      ← Search engine sitemaps
├── robots.txt                           ← Crawler rules
├── AGENTS.md & README.md                ← Guidelines & documentation
├── assets/                              ← CSS, JS, and Fonts
│   ├── css/
│   ├── js/
│   └── fonts/
├── images/                              ← Original image assets
│   ├── destinations/
│   ├── fleet/
│   └── hero-bg.webp
├── optimized/                           ← Responsive WebP images
├── fleet/                               ← Detailed vehicle landing pages
├── routes/                              ← Outstation route pages
├── services/                            ← Special service pages
├── localities/                          ← Bangalore locality pages
├── scripts/                             ← Automation & maintenance tools
│   ├── master_seo_pipeline.js           ← Main image SEO pipeline
│   ├── seo_audit_all_pages.js           ← Site-wide SEO audit
│   └── ...
└── docs/                                ← Internal documentation & audit data
    ├── PLAN.md & WORKBOOK.md
    ├── image-seo-audit.csv
    └── ...
```

## 🔧 Troubleshooting

### Error: `sharp` failed to install
```bash
# On Windows, try:
npm install --ignore-scripts sharp
npm rebuild sharp
```

### Error: Permission denied on renaming
Run your terminal as Administrator (Windows) or with `sudo` (macOS/Linux).

### Error: No images found
Make sure your `images/` folder contains `.jpg`, `.jpeg`, `.png`, or `.webp` files.

## 📊 Interpreting the Audit CSV

Open `image-seo-audit.csv` in Excel or Google Sheets. Columns:

- **File Path** — Relative path to the image
- **Type** — hero / content / thumbnail
- **File Size** — Actual size after compression
- **Size PASS/FAIL** — PASS if within limits, FAIL if over
- **Alt Text** — Generated alt text (check it for relevance)
- **WebP Format** — PASS if already WebP

### Fix Failing Images
- Images marked **FAIL** in size: Lower quality in `config.json` > `images.webpQuality`
- Images missing alt text: The pipeline generates it; verify in `seo-image-snippets.json`

## 🌐 Google Search Console Setup

After running the pipeline:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Sitemaps**
3. Enter URL: `https://khushitravel.in/image-sitemap.xml`
4. Click **Submit**

This helps Google discover and index all your optimized images.

## 📈 AI Overview (SGE) Optimization

The pipeline generates:
- **Structured data** — JSON-LD `ImageObject` with geo coordinates helps Google understand image context
- **Descriptive alt text** — Uses keywords naturally for AI Overview citation
- **Responsive images** — `srcset` with proper `sizes` improves Core Web Vitals
- **Size optimization** — Under 100 KB for content images ensures fast loading (Google's LCP threshold)
- **Geo-tagged metadata** — Local business results in AI Overviews

## 🔄 Re-running the Pipeline

The pipeline is safe to re-run:
- Original files in `images/` are never modified
- The `optimized/` folder is regenerated each run
- Filenames are preserved to keep HTML `<img>` references working

To reset: Delete `optimized/` folder and the output files, then re-run.

---

**Built for Khushi Travels — Rank in 2026** 🚀
