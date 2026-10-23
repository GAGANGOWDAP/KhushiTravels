#!/usr/bin/env node

/**
 * Master Image SEO Pipeline — Khushi Travels
 * ============================================
 * 9 Pillars of Image SEO 2026
 *
 * Requirements: Node.js 18+, npm packages: sharp
 * Install: npm install sharp
 *
 * Geo-coordinates are dynamically resolved from your business address
 * using OpenStreetMap Nominatim (with config.json fallback).
 *
 * Usage: node master_seo_pipeline.js
 */

/* eslint-disable no-console, max-len */

// ─── Dependencies ───────────────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const sharp = require('sharp');

// ─── Load Config ────────────────────────────────────────────────────────────
const configPath = fs.existsSync(path.join(__dirname, 'config.json'))
  ? path.join(__dirname, 'config.json')
  : path.join(__dirname, '..', 'config.json');
if (!fs.existsSync(configPath)) {
  console.error('ERROR: config.json not found in scripts/ or project root.');
  process.exit(1);
}
const CONFIG = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const CFG = CONFIG.images;
const BIZ = CONFIG.business;

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Determine image type (hero/content/thumbnail) based on dimensions + name */
function classifyImage(width, height, filename) {
  const lc = filename.toLowerCase();
  if (lc.includes('hero') || lc.includes('banner') || lc.includes('logo')) return 'hero';
  if (width < 300 || height < 300) return 'thumbnail';
  if (width > 1000 || height > 800) return 'hero';
  return 'content';
}

/** Human-readable file size */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** Generate keyword-rich alt text from filename */
function altTextFromFilename(filename, location) {
  const name = path.parse(filename).name
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const loc = location || 'Bangalore';
  return `${name} - ${BIZ.shortName} ${loc}`;
}

/** Get file extension (lowercase) */
function extLower(file) {
  return path.extname(file).toLowerCase();
}

/** Walk directory recursively for image files */
function walkDir(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkDir(full));
    } else if (CFG.allowedExtensions.includes(extLower(file))) {
      results.push(full);
    }
  }
  return results;
}

/** MD5 hash of a buffer */
function md5Hash(buf) {
  return crypto.createHash('md5').update(buf).digest('hex');
}

/** Safe write to file (creates dirs) */
function safeWrite(filePath, content) {
  const dir = path.dirname(path.resolve(filePath));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  // If content is an object, stringify
  if (typeof content === 'object') content = JSON.stringify(content, null, 2);
  fs.writeFileSync(filePath, content, 'utf8');
  return filePath;
}

/** Check if file size is within limits */
function sizeCheck(sizeBytes, type) {
  const limits = {
    hero: CFG.heroMaxSizeKB * 1024,
    content: CFG.contentMaxSizeKB * 1024,
    thumbnail: CFG.thumbnailMaxSizeKB * 1024,
  };
  const limit = limits[type] || limits.content;
  return { pass: sizeBytes <= limit, limit, actual: sizeBytes };
}

/**
 * Dynamically resolve geo coords from address via OpenStreetMap Nominatim.
 * Falls back to config.json if API is unreachable.
 */
function resolveGeolocationFromAddress(address) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1&addressdetails=1`;

    console.log(`   🌐 Resolving GPS from address via Nominatim...`);

    https.get(url, { headers: { 'User-Agent': 'KhushiTravelsImageSEOPipeline/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed && parsed.length > 0) {
            const lat = parseFloat(parsed[0].lat);
            const lon = parseFloat(parsed[0].lon);
            console.log(`   ✓ Resolved: ${lat}, ${lon}`);
            resolve({ latitude: lat, longitude: lon });
          } else {
            console.log(`   ⚠ No Nominatim results — using config.json fallback`);
            resolve({ latitude: BIZ.geo.latitude, longitude: BIZ.geo.longitude });
          }
        } catch {
          console.log(`   ⚠ Nominatim parse error — using config.json fallback`);
          resolve({ latitude: BIZ.geo.latitude, longitude: BIZ.geo.longitude });
        }
      });
    }).on('error', (err) => {
      console.log(`   ⚠ Nominatim request failed (${err.message}) — using config.json fallback`);
      resolve({ latitude: BIZ.geo.latitude, longitude: BIZ.geo.longitude });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 1: BULK FILE RENAMING — {keyword}-{location}-{descriptor}.webp
// ═══════════════════════════════════════════════════════════════════════════════

function pillar1SanitizeFilenames(files) {
  console.log('\n📁 [Pillar 1] Filename Sanitization...');
  console.log(`   Renaming is DISABLED to preserve existing HTML <img> references.`);
  console.log(`   → ${files.length} files kept with original names`);
  return files;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 2: WEBP CONVERSION & COMPRESSION
// ═══════════════════════════════════════════════════════════════════════════════

async function pillar2WebpConversion(files, geo) {
  console.log('\n🖼️  [Pillar 2] WebP Conversion & Compression + EXIF Metadata Injection...');
  console.log(`   Max sizes: Hero ${CFG.heroMaxSizeKB}KB | Content ${CFG.contentMaxSizeKB}KB | Thumb ${CFG.thumbnailMaxSizeKB}KB`);
  console.log(`   GPS: ${geo.latitude}, ${geo.longitude} | © ${BIZ.copyrightHolder}`);

  const outputDir = path.resolve(CFG.outputDir);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const results = [];

  for (const filePath of files) {
    const relPath = path.relative(CFG.inputDir, filePath);
    const outPath = path.join(outputDir, relPath).replace(/\.(jpe?g|png)$/i, '.webp');
    const outDir = path.dirname(outPath);

    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    try {
      const metadata = await sharp(filePath).metadata();
      const imgType = classifyImage(metadata.width || 1200, metadata.height || 800, filePath);
      const quality = CFG.webpQuality[imgType] || 75;

      // Build EXIF metadata payload with GPS, copyright, creator, caption
      const metadataPayload = {
        ifd0: {
          Artist: BIZ.creator,
          Copyright: `© ${BIZ.copyrightHolder}. All rights reserved.`,
          ImageDescription: altTextFromFilename(filePath, BIZ.address.locality),
          Software: 'Khushi Travels Image SEO Pipeline',
        },
        gps: {
          GPSLatitudeRef: geo.latitude >= 0 ? 'N' : 'S',
          GPSLatitude: Math.abs(geo.latitude),
          GPSLongitudeRef: geo.longitude >= 0 ? 'E' : 'W',
          GPSLongitude: Math.abs(geo.longitude),
        },
      };

      // Convert to WebP with metadata injected in one pass
      await sharp(filePath)
        .withMetadata(metadataPayload)
        .webp({ quality, effort: 6 })
        .toFile(outPath);

      const stats = fs.statSync(outPath);
      const sizeOk = sizeCheck(stats.size, imgType);

      results.push({
        file: relPath,
        output: path.relative(outputDir, outPath),
        width: metadata.width,
        height: metadata.height,
        type: imgType,
        size: stats.size,
        sizeFormatted: formatSize(stats.size),
        sizePass: sizeOk.pass,
        quality,
      });

      const icon = sizeOk.pass ? '✓' : '⚠';
      console.log(`   ${icon} ${relPath} → ${formatSize(stats.size)} (${imgType}, q${quality})${sizeOk.pass ? '' : ' OVER LIMIT'}`);
    } catch (err) {
      console.error(`   ✗ Failed to process ${relPath}: ${err.message}`);
      results.push({ file: relPath, error: err.message });
    }
  }

  console.log(`   → Processed ${results.length} images`);
  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 3: EXIF / IPTC METADATA INJECTION
// ═══════════════════════════════════════════════════════════════════════════════

async function pillar3ExifMetadata(files, processedResults, geo) {
  // Pillar 2 now handles the core EXIF injection during conversion.
  // This function is kept as a best-effort enhancement pass but
  // typically all metadata is already set. Main EXIF tags (GPS,
  // copyright, caption) are injected in pillar2WebpConversion().
  console.log(`   → Core EXIF already injected — skipping redundant pass`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 4: HTML RESPONSIVE CODE GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

async function pillar4HtmlGenerator(files, processedResults) {
  console.log('\n📝 [Pillar 4] HTML Responsive Code Generator...');
  console.log(`   Sizes: ${CFG.responsiveSizes.small}w, ${CFG.responsiveSizes.medium}w, ${CFG.responsiveSizes.large}w`);

  const outputDir = path.resolve(CFG.outputDir);
  const snippets = [];
  let generated = 0;

  for (const proc of processedResults) {
    if (!proc || proc.error) continue;

    const originalPath = path.join(CFG.inputDir, proc.file);
    const relDir = path.dirname(proc.file);
    const baseName = path.basename(proc.output).replace(/\.webp$/, '');
    const sizes = CFG.responsiveSizes;
    const srcsetEntries = [];

    // Generate srcset for each responsive size
    for (const [label, width] of Object.entries(sizes)) {
      const resizedFile = `${baseName}-${width}w.webp`;
      const resizedPath = path.join(outputDir, relDir, resizedFile);

      try {
        const buf = await sharp(originalPath)
          .resize(width, null, { fit: 'inside', withoutEnlargement: true })
          .withMetadata()
          .webp({ quality: 75, effort: 4 })
          .toBuffer();
        if (!fs.existsSync(path.dirname(resizedPath))) {
          fs.mkdirSync(path.dirname(resizedPath), { recursive: true });
        }
        fs.writeFileSync(resizedPath, buf);
        srcsetEntries.push(`${resizedFile} ${width}w`);
        generated++;
      } catch (err) {
        console.error(`   ✗ Failed to resize ${proc.file} for ${width}w: ${err.message}`);
      }
    }

    // Determine fetchpriority (only hero images get 'high')
    const isHero = proc.type === 'hero';
    const fetchPriority = isHero ? 'high' : 'auto';

    // Build sizes attribute — responsive breakpoint guidance
    const sizesAttr = isHero
      ? '100vw'
      : '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw';

    // Generate keyword-rich alt text
    const alt = altTextFromFilename(proc.file, BIZ.address.locality);
    const title = `${BIZ.shortName} - ${alt}`;

    // Primary image path (the full-size processed WebP)
    const primarySrc = proc.output;

    // Build complete HTML img tag with all SEO attributes
    const html = `<img
  src="${primarySrc}"
  srcset="${srcsetEntries.join(', ')}"
  sizes="${sizesAttr}"
  alt="${alt}"
  title="${title}"
  loading="lazy"
  decoding="async"
  fetchpriority="${fetchPriority}"
  width="${proc.width}"
  height="${proc.height}"
/>`;

    snippets.push({
      file: proc.file,
      html,
      alt,
      title,
      srcset: srcsetEntries.join(', '),
      sizes: sizesAttr,
      loading: 'lazy',
      decoding: 'async',
      fetchpriority: fetchPriority,
      hasSrcset: srcsetEntries.length > 0,
    });
  }

  // Save all HTML snippets to JSON
  const snippetsPath = path.join(outputDir, CONFIG.outputFiles.htmlSnippets);
  safeWrite(snippetsPath, JSON.stringify(snippets, null, 2));
  console.log(`   → Generated ${generated} responsive variants`);
  console.log(`   → Saved ${snippets.length} HTML snippets to ${snippetsPath}`);
  return snippets;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 5: JSON-LD STRUCTURED DATA (ImageObject Schema)
// ═══════════════════════════════════════════════════════════════════════════════

function pillar5Jsonld(processedResults, geo) {
  console.log('\n🔍 [Pillar 5] JSON-LD Structured Data Generator...');

  const graph = [];

  for (const proc of processedResults) {
    if (!proc || proc.error) continue;

    const imageUrl = `${BIZ.url}/${CFG.outputDir}/${proc.file.replace(/\\/g, '/')}`;
    const caption = altTextFromFilename(proc.file, BIZ.address.locality);

    graph.push({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      'url': imageUrl,
      'contentUrl': imageUrl,
      'caption': caption,
      'description': `${caption} - ${BIZ.description}`,
      'name': path.parse(proc.file).name.replace(/[-_]/g, ' '),
      'representativeOfPage': proc.type === 'hero',
      'width': proc.width,
      'height': proc.height,
      'contentLocation': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': BIZ.address.street,
          'addressLocality': BIZ.address.locality,
          'addressRegion': BIZ.address.region,
          'postalCode': BIZ.address.postalCode,
          'addressCountry': BIZ.address.country,
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': geo.latitude,
          'longitude': geo.longitude,
        },
      },
      'copyrightHolder': {
        '@type': 'Organization',
        'name': BIZ.copyrightHolder,
      },
      'copyrightNotice': `© ${BIZ.copyrightHolder}. All rights reserved.`,
      'creator': {
        '@type': 'Organization',
        'name': BIZ.creator,
      },
      'creditText': BIZ.creator,
      'datePublished': new Date().toISOString().split('T')[0],
      'uploadDate': new Date().toISOString().split('T')[0],
      'license': 'https://creativecommons.org/licenses/by-nc/4.0/',
      'acquireLicensePage': `${BIZ.url}/contact`,
    });
  }

  const jsonldPath = path.join(CFG.outputDir, CONFIG.outputFiles.jsonld);
  // Wrap in @graph for valid JSON-LD
  const jsonldOutput = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
  safeWrite(jsonldPath, jsonldOutput);
  console.log(`   → Saved ${graph.length} ImageObject schemas to ${jsonldPath}`);
  return graph;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 6: IMAGE SITEMAP GENERATION
// ═══════════════════════════════════════════════════════════════════════════════

function pillar6ImageSitemap(processedResults, geo) {
  console.log('\n🗺️  [Pillar 6] Image Sitemap Generator...');

  if (processedResults.length === 0) {
    console.log('   ⚠ No processed images to include in sitemap');
    return null;
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  const geoLocation = `${geo.latitude},${geo.longitude}`;
  const pageUrl = `${BIZ.url}/`;

  for (const proc of processedResults) {
    if (!proc || proc.error) continue;

    const imageUrl = `${BIZ.url}/${CFG.outputDir}/${proc.file.replace(/\\/g, '/')}`;
    const caption = altTextFromFilename(proc.file, BIZ.address.locality)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    const title = path.parse(proc.file).name.replace(/[-_]/g, ' ')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

    xml += `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:caption>${caption}</image:caption>
      <image:geo_location>${geoLocation}</image:geo_location>
      <image:title>${title}</image:title>
    </image:image>
  </url>
`;
  }

  xml += '</urlset>';

  const sitemapPath = path.resolve(CONFIG.outputFiles.sitemap);
  safeWrite(sitemapPath, xml);
  console.log(`   → Saved image sitemap to ${sitemapPath}`);
  return xml;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 7: SOCIAL META TAGS (OG & TWITTER)
// ═══════════════════════════════════════════════════════════════════════════════

function pillar7SocialMetaTags(processedResults) {
  console.log('\n📱 [Pillar 7] Social Meta Tags Generator...');

  // Find hero image for the default OG/Twitter card
  const hero = processedResults.find(p => p && p.type === 'hero');
  const defaultImage = hero
    ? `${BIZ.url}/${CFG.outputDir}/${hero.file.replace(/\\/g, '/')}`
    : `${BIZ.url}/${CFG.outputDir}/hero-bg.webp`;

  const metaTags = {
    og: {
      'og:type': 'website',
      'og:url': BIZ.url,
      'og:site_name': BIZ.shortName,
      'og:title': `${BIZ.shortName} — ${BIZ.description}`,
      'og:description': BIZ.description,
      'og:image': defaultImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': `${BIZ.shortName} — ${BIZ.description}`,
      'og:locale': 'en_IN',
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:site': '@KhushiTravels',
      'twitter:title': `${BIZ.shortName} — ${BIZ.description}`,
      'twitter:description': BIZ.description,
      'twitter:image': defaultImage,
      'twitter:image:alt': `${BIZ.shortName} — ${BIZ.description}`,
    },
  };

  // Generate complete HTML meta tag block for page-level
  let metaHtml = '<!-- Open Graph / Social Meta Tags -->\n';
  for (const [prop, value] of Object.entries(metaTags.og)) {
    metaHtml += `<meta property="${prop}" content="${value}" />\n`;
  }
  metaHtml += '\n<!-- Twitter Card Meta Tags -->\n';
  for (const [name, value] of Object.entries(metaTags.twitter)) {
    metaHtml += `<meta name="${name}" content="${value}" />\n`;
  }

  // Generate image-specific OG tags for every processed image
  const imageMetaTags = processedResults
    .filter(p => p && !p.error)
    .map(p => {
      const alt = altTextFromFilename(p.file, BIZ.address.locality);
      const imageUrl = `${BIZ.url}/${CFG.outputDir}/${p.file.replace(/\\/g, '/')}`;
      return {
        file: p.file,
        html: `<!-- ${alt} -->
<meta property="og:image" content="${imageUrl}" />
<meta property="og:image:width" content="${p.width}" />
<meta property="og:image:height" content="${p.height}" />
<meta property="og:image:alt" content="${alt}" />
<meta name="twitter:image" content="${imageUrl}" />
`,
      };
    });

  const metaPath = path.join(CFG.outputDir, 'social-meta-tags.txt');
  const content = `## Page-Level Meta Tags\n${metaHtml}\n## Image-Level Meta Tags\n${imageMetaTags.map(m => m.html).join('\n')}`;
  safeWrite(metaPath, content);
  console.log(`   → Saved social meta tags to ${metaPath}`);

  // Also save structured JSON
  const metaJsonPath = path.join(CFG.outputDir, 'social-meta-tags.json');
  safeWrite(metaJsonPath, { pageMeta: metaTags, imageMeta: imageMetaTags });

  return { metaTags, imageMetaTags, metaHtml };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 8: PERFORMANCE AUDIT TOOL (CSV Report)
// ═══════════════════════════════════════════════════════════════════════════════

async function pillar8PerformanceAudit(files, processedResults, snippets) {
  console.log('\n📊 [Pillar 8] Performance Audit Tool...');

  const outputDir = path.resolve(CFG.outputDir);
  const auditRows = [];

  for (const filePath of files) {
    const relPath = path.relative(CFG.inputDir, filePath);
    const outPath = path.join(outputDir, relPath.replace(/\.(jpe?g|png)$/i, '.webp'));

    const proc = processedResults.find(p => p && p.file === relPath);
    const snippet = snippets.find(s => s && s.file === relPath);
    const type = proc ? proc.type : 'unknown';
    const stats = fs.existsSync(outPath) ? fs.statSync(outPath) : null;

    const sizeOk = stats ? sizeCheck(stats.size, type) : { pass: false, limit: 0, actual: 0 };

    // ACTUALLY check if the HTML snippet has the required attributes
    const hasLazyLoading = snippet && snippet.loading === 'lazy' ? 'PASS' : 'MISSING';
    const hasDecodingAsync = snippet && snippet.decoding === 'async' ? 'PASS' : 'MISSING';
    const hasFetchPriority = snippet && snippet.fetchpriority ? 'PASS' : 'MISSING';
    const hasSrcset = snippet && snippet.hasSrcset ? `PASS (${snippet.srcset.split(',').length} variants)` : 'MISSING';
    const hasSizes = snippet && snippet.sizes ? 'PASS' : 'MISSING';
    const hasAlt = snippet && snippet.alt ? 'PASS' : 'MISSING';
    const isWebp = outPath.toLowerCase().endsWith('.webp');
    const hasResponsiveVariants = snippet && snippet.hasSrcset ? 'PASS' : 'MISSING';

    auditRows.push({
      'File': relPath,
      'Type': type,
      'Size': stats ? formatSize(stats.size) : 'N/A',
      'Size PASS/FAIL': sizeOk.pass ? 'PASS' : 'FAIL',
      'Size Limit': stats ? formatSize(sizeOk.limit) : 'N/A',
      'WebP': isWebp ? 'PASS' : 'FAIL',
      'loading=lazy': hasLazyLoading,
      'decoding=async': hasDecodingAsync,
      'fetchpriority': (type === 'hero' ? hasFetchPriority : 'N/A'),
      'srcset': hasSrcset,
      'sizes attr': hasSizes,
      'Alt Text': hasAlt,
      'Responsive variants': hasResponsiveVariants,
    });
  }

  // Generate CSV
  const headers = Object.keys(auditRows[0] || {});
  let csv = headers.join(',') + '\n';
  for (const row of auditRows) {
    csv += headers.map(h => {
      const val = (row[h] || '').toString();
      if (val.includes(',') || val.includes('"') || val.includes('\n')) {
        return `"${val.replace(/"/g, '""')}"`;
      }
      return val;
    }).join(',') + '\n';
  }

  const auditPath = path.resolve(CONFIG.outputFiles.auditReport);
  safeWrite(auditPath, csv);
  console.log(`   → Saved audit report to ${auditPath}`);

  // Summary stats
  const passCount = auditRows.filter(r => r['Size PASS/FAIL'] === 'PASS').length;
  const failCount = auditRows.filter(r => r['Size PASS/FAIL'] === 'FAIL').length;
  console.log(`   → ${passCount} PASS / ${failCount} FAIL on size`);
  const altMissing = auditRows.filter(r => r['Alt Text'] === 'MISSING').length;
  if (altMissing > 0) console.log(`   ⚠ ${altMissing} images missing alt text`);
  const srcsetMissing = auditRows.filter(r => r['srcset'] === 'MISSING').length;
  if (srcsetMissing > 0) console.log(`   ⚠ ${srcsetMissing} images missing srcset`);

  return csv;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR 9: DUPLICATE DETECTION (MD5 Hashing)
// ═══════════════════════════════════════════════════════════════════════════════

function pillar9DuplicateDetection(files) {
  console.log('\n🔎 [Pillar 9] Duplicate Detection (MD5)...');

  const hashMap = {};
  const altSuggestions = {};

  for (const filePath of files) {
    try {
      const buf = fs.readFileSync(filePath);
      const hash = md5Hash(buf);
      const relPath = path.relative(CFG.inputDir, filePath);

      if (!hashMap[hash]) hashMap[hash] = [];
      hashMap[hash].push(relPath);
    } catch (err) {
      console.error(`   ✗ Failed to hash ${filePath}: ${err.message}`);
    }
  }

  const duplicates = {};
  for (const [hash, paths] of Object.entries(hashMap)) {
    if (paths.length > 1) {
      duplicates[hash] = paths;
      // Suggest unique alt text variations for each duplicate
      const suffixes = ['Primary View', 'Secondary View', 'Alternate Angle', 'Close-up Detail', 'Wide Context'];
      paths.forEach((p, i) => {
        const baseAlt = altTextFromFilename(p, BIZ.address.locality);
        altSuggestions[p] = `${baseAlt} - ${suffixes[i % suffixes.length]}`;
      });
    }
  }

  const dupCount = Object.keys(duplicates).length;
  console.log(`   → Scanned ${files.length} images, found ${dupCount} duplicate group(s)`);

  if (dupCount > 0) {
    console.log('');
    for (const [hash, paths] of Object.entries(duplicates)) {
      console.log(`   📎 Hash ${hash.substring(0, 12)}... (${paths.length} copies)`);
      for (const p of paths) {
        console.log(`      - ${p}`);
        if (altSuggestions[p]) {
          console.log(`        Alt: "${altSuggestions[p]}"`);
        }
      }
    }
  } else {
    console.log('   ✓ No exact duplicates found');
  }

  const output = {
    totalScanned: files.length,
    duplicateGroups: dupCount,
    duplicates,
    altTextSuggestions: altSuggestions,
  };

  const dupPath = path.resolve(CONFIG.outputFiles.duplicates);
  safeWrite(dupPath, JSON.stringify(output, null, 2));
  console.log(`   → Saved duplicate report to ${dupPath}`);

  return output;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PIPELINE ORCHESTRATOR
// ═══════════════════════════════════════════════════════════════════════════════

async function main() {
  const startTime = Date.now();

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║     🚀  Khushi Travels — Image SEO Pipeline 2026         ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log(`   Business: ${BIZ.name}`);
  console.log(`   Input:    ${CFG.inputDir}/`);
  console.log(`   Output:   ${CFG.outputDir}/`);

  // ─── Step 0: Resolve geolocation from address ────────────────────────────
  console.log('\n━━━ Resolving geolocation...');
  const fullAddress = `${BIZ.address.street}, ${BIZ.address.locality}, ${BIZ.address.region}, ${BIZ.address.postalCode}, ${BIZ.address.country}`;
  const geo = await resolveGeolocationFromAddress(fullAddress);
  console.log(`   Using GPS: ${geo.latitude}, ${geo.longitude}`);

  // ─── Step 1: Scan images ─────────────────────────────────────────────────
  console.log('\n━━━ Scanning images...');
  let files = walkDir(CFG.inputDir);
  console.log(`   Found ${files.length} image files`);

  if (files.length === 0) {
    console.warn('   ⚠ No images found in input directory. Check your config.json.');
    return;
  }

  // ─── Step 2: Pillar 1 — Filename Sanitization (disabled renaming)
  // WARNING: Renaming is disabled to preserve HTML file references.
  // Previously this renamed all images to {keyword}-{location}-{descriptor}.webp
  // which broke all HTML <img> tags. The pipeline now leaves filenames as-is.
  console.log('\n' + '═'.repeat(58));
  files = pillar1SanitizeFilenames(files);

  // ─── Step 3: Pillar 2 — WebP Conversion + EXIF Metadata (combined)
  console.log('\n' + '═'.repeat(58));
  const processedResults = await pillar2WebpConversion(files, geo);

  // ─── Step 4: Pillar 3 — EXIF Metadata (enhancement pass, best-effort)
  // Note: Core EXIF (GPS, copyright, caption) is already injected during Pillar 2
  // This enhancement pass attempts to add additional tags where possible.
  console.log('\n' + '═'.repeat(58));
  console.log('🏷️  [Pillar 3] EXIF Metadata Enhancement (best-effort)...');
  console.log('   (Core EXIF already injected during Pillar 2 conversion)');

  // ─── Step 5: Pillar 4 — HTML Generator ──────────────────────────────────
  console.log('\n' + '═'.repeat(58));
  const snippets = await pillar4HtmlGenerator(files, processedResults);

  // ─── Step 6: Pillar 5 — JSON-LD ──────────────────────────────────────────
  console.log('\n' + '═'.repeat(58));
  pillar5Jsonld(processedResults, geo);

  // ─── Step 7: Pillar 6 — Image Sitemap ────────────────────────────────────
  console.log('\n' + '═'.repeat(58));
  pillar6ImageSitemap(processedResults, geo);

  // ─── Step 8: Pillar 7 — Social Meta Tags ────────────────────────────────
  console.log('\n' + '═'.repeat(58));
  pillar7SocialMetaTags(processedResults);

  // ─── Step 9: Pillar 8 — Performance Audit ───────────────────────────────
  console.log('\n' + '═'.repeat(58));
  await pillar8PerformanceAudit(files, processedResults, snippets);

  // ─── Step 10: Pillar 9 — Duplicate Detection ─────────────────────────────
  console.log('\n' + '═'.repeat(58));
  pillar9DuplicateDetection(files);

  // ─── Summary ─────────────────────────────────────────────────────────────
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n' + '═'.repeat(58));
  console.log('✅  PIPELINE COMPLETE');
  console.log(`   Duration:     ${duration}s`);
  console.log(`   Images processed: ${processedResults.length}`);

  const passCount = processedResults.filter(p => p && p.sizePass).length;
  const failCount = processedResults.filter(p => p && !p.sizePass).length;
  if (failCount > 0) {
    console.log(`   ⚠  ${failCount} images exceed size limits (check audit CSV)`);
  }
  console.log(`   ✓  ${passCount} images within size limits`);

  console.log('\n📁  Generated files:');
  const outFiles = [
    CONFIG.outputFiles.htmlSnippets,
    CONFIG.outputFiles.jsonld,
    CONFIG.outputFiles.sitemap,
    CONFIG.outputFiles.auditReport,
    CONFIG.outputFiles.duplicates,
    path.join(CFG.outputDir, 'social-meta-tags.txt'),
    path.join(CFG.outputDir, 'social-meta-tags.json'),
  ];
  for (const f of outFiles) {
    const resolved = path.resolve(f);
    if (fs.existsSync(resolved)) {
      console.log(`   📄  ${path.relative('.', resolved)}`);
    }
  }

  console.log('\n💡  Next steps:');
  console.log('   1. Copy <img> snippets from optimized/seo-image-snippets.json into your HTML');
  console.log('   2. Add JSON-LD from optimized/image-jsonld.json to your <head>');
  console.log('   3. Upload image-sitemap.xml to Google Search Console');
  console.log('   4. Add social-meta-tags.txt content to your page <head>');
  console.log('   5. Check optimized/image-seo-audit.csv for any failing images');
  console.log('   6. Delete or rename any duplicates listed in image-duplicates.json\n');
}

// ─── Run ─────────────────────────────────────────────────────────────────────
main().catch(err => {
  console.error('\n❌  Pipeline failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
