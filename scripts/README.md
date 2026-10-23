# Khushi Travels — Maintenance & Automation Scripts

This directory contains standalone maintenance, auditing, and image SEO optimization scripts.

## Scripts Overview

| Script | Purpose | Usage |
|---|---|---|
| `master_seo_pipeline.js` | 9-pillar image SEO optimization pipeline (compression, WebP, metadata) | `node scripts/master_seo_pipeline.js` |
| `seo_audit_all_pages.js` | Full SEO audit script checking metadata, schema, and headings across all pages | `node scripts/seo_audit_all_pages.js` |
| `check_broken_images.js` | Image link and alt attribute integrity validator | `node scripts/check_broken_images.js` |
| `fix_seo_meta_tags.js` | Utility script to verify and standardize Open Graph and meta descriptions | `node scripts/fix_seo_meta_tags.js` |
| `fix-seo-names.js` | Standardizes naming conventions for SEO assets | `node scripts/fix-seo-names.js` |
| `image_seo_automation.py` | Python pipeline for image processing and responsive snippets | `python scripts/image_seo_automation.py` |

## Execution Guidelines
All scripts are designed to be run from the repository root:
```bash
# Example: Run image SEO pipeline
node scripts/master_seo_pipeline.js

# Example: Run SEO page audit
node scripts/seo_audit_all_pages.js
```
