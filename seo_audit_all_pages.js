#!/usr/bin/env node
/**
 * seo_audit_all_pages.js
 * Scans every HTML file for SEO 2026 compliance issues.
 * Checks: alt text, meta tags, schema, loading, canonical, OG, Twitter, headings.
 */

const fs = require('fs');
const path = require('path');

// ── Config ──────────────────────────────────────────────────────────
const IGNORE_FILES = ['output.html'];  // Generated files, skip
const SITE_URL = 'https://khushitravel.in';

// ── Helpers ─────────────────────────────────────────────────────────
function getAllHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'optimized') {
      getAllHtmlFiles(full, files);
    } else if (entry.name.endsWith('.html') && !IGNORE_FILES.includes(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function countOccurrences(content, regex) {
  const matches = content.match(regex);
  return matches ? matches.length : 0;
}

function extractTag(content, regex) {
  const match = content.match(regex);
  return match ? match[1] || match[0] : null;
}

function extractAllTags(content, regex) {
  const matches = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    matches.push(m[1] || m[0]);
  }
  return matches;
}

// ── Audit function ──────────────────────────────────────────────────
function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(process.cwd(), filePath);
  const issues = [];
  const warnings = [];

  // 1. Title tag
  const title = extractTag(content, /<title>([^<]*)<\/title>/i);
  if (!title) {
    issues.push('MISSING <title> tag');
  } else if (title.trim().length < 20) {
    issues.push(`SHORT title (${title.trim().length} chars): "${title.trim()}"`);
  }

  // 2. Meta description
  const metaDesc = extractTag(content, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) 
    || extractTag(content, /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  if (!metaDesc) {
    issues.push('MISSING meta description');
  } else if (metaDesc.trim().length < 50) {
    warnings.push(`SHORT meta description (${metaDesc.trim().length} chars): "${metaDesc.trim()}"`);
  }

  // 3. Canonical tag
  const canonical = extractTag(content, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (!canonical) {
    issues.push('MISSING canonical tag');
  }

  // 4. Open Graph tags
  const ogTitle = extractTag(content, /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  const ogDesc = extractTag(content, /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const ogUrl = extractTag(content, /<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i);
  const ogImage = extractTag(content, /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  
  if (!ogTitle) issues.push('MISSING og:title');
  if (!ogDesc) issues.push('MISSING og:description');
  if (!ogUrl) issues.push('MISSING og:url');
  if (!ogImage) issues.push('MISSING og:image');

  // 5. Twitter Card tags
  const twitterCard = extractTag(content, /<meta\s+name=["']twitter:card["']\s+content=["']([^"']*)["']/i);
  const twitterTitle = extractTag(content, /<meta\s+name=["']twitter:title["']\s+content=["']([^"']*)["']/i);
  const twitterDesc = extractTag(content, /<meta\s+name=["']twitter:description["']\s+content=["']([^"']*)["']/i);
  const twitterImage = extractTag(content, /<meta\s+name=["']twitter:image["']\s+content=["']([^"']*)["']/i);

  if (!twitterCard) issues.push('MISSING twitter:card');
  if (!twitterTitle) issues.push('MISSING twitter:title');
  if (!twitterDesc) issues.push('MISSING twitter:description');
  if (!twitterImage) issues.push('MISSING twitter:image');

  // 6. JSON-LD schema
  const jsonldCount = countOccurrences(content, /<script\s+type=["']application\/ld\+json["']>/gi);
  if (jsonldCount === 0) {
    issues.push('MISSING any JSON-LD structured data');
  }

  // Check for LocalBusiness schema
  const hasLocalBusiness = content.includes('"LocalBusiness"') || content.includes("'LocalBusiness'");
  const hasBreadcrumb = content.includes('"BreadcrumbList"') || content.includes("'BreadcrumbList'");
  const hasFAQ = content.includes('"FAQPage"') || content.includes("'FAQPage'");
  
  if (!hasLocalBusiness && relPath === 'index.html') {
    issues.push('MISSING LocalBusiness schema on homepage');
  }

  // 7. Image alt text check
  const imgTags = extractAllTags(content, /<img\s+([^>]*)>/gi);
  let imgsWithoutAlt = 0;
  let imgsWithoutLazy = 0;
  let totalImgs = 0;

  for (const tag of imgTags) {
    totalImgs++;
    if (!/alt\s*=/i.test(tag)) {
      imgsWithoutAlt++;
      // Show a sample of the image tag without alt
      const src = extractTag(tag, /src=["']([^"']*)["']/i);
      warnings.push(`  IMG missing alt: ${src || tag.slice(0, 60)}`);
    }
    if (!/loading\s*=/i.test(tag)) {
      imgsWithoutLazy++;
    }
  }

  if (imgsWithoutAlt > 0) {
    issues.push(`${imgsWithoutAlt}/${totalImgs} images missing alt text`);
  }

  // 8. H1 tag
  const h1Count = countOccurrences(content, /<h1[^>]*>/gi);
  if (h1Count === 0) {
    issues.push('MISSING <h1> tag');
  } else if (h1Count > 1) {
    warnings.push(`${h1Count} <h1> tags (recommend only one)`);
  }

  // 9. H1 → H2 → H3 hierarchy check
  const h2Count = countOccurrences(content, /<h2[^>]*>/gi);
  const h3Count = countOccurrences(content, /<h3[^>]*>/gi);
  if (h1Count > 0 && h2Count === 0) {
    warnings.push('H1 present but no H2 tags (for content pages)');
  }

  // 10. Robots meta tag
  const hasRobots = /<meta\s+name=["']robots["']/i.test(content);
  if (!hasRobots && (relPath === 'index.html')) {
    warnings.push('NO robots meta tag on homepage');
  }

  // 11. Viewport meta
  const hasViewport = /viewport/i.test(content);
  if (!hasViewport) {
    issues.push('MISSING viewport meta tag');
  }

  // 12. Favicon
  const hasFavicon = /favicon/i.test(content);
  if (!hasFavicon) {
    warnings.push('NO favicon reference');
  }

  // 13. Check for broken image references (files that don't exist)
  const imgSrcs = extractAllTags(content, /src=["']([^"']*\.(webp|jpg|jpeg|png|gif|svg))["']/gi);
  let brokenImgs = 0;
  for (const src of imgSrcs) {
    // Skip absolute URLs (they point to live site)
    if (src.startsWith('http')) continue;
    // Resolve relative paths
    const resolved = path.resolve(path.dirname(filePath), src);
    if (!fs.existsSync(resolved)) {
      brokenImgs++;
      warnings.push(`  BROKEN IMAGE: ${src} (resolved: ${resolved})`);
    }
  }
  if (brokenImgs > 0) {
    warnings.push(`${brokenImgs} images reference files that don't exist locally`);
  }

  return {
    file: relPath,
    issues,
    warnings,
    title,
    metaDesc: metaDesc ? metaDesc.trim() : null,
    totalImgs,
    imgsWithoutAlt,
    jsonldCount,
    hasLocalBusiness,
    hasBreadcrumb,
    hasFAQ,
    h1Count,
    h2Count,
    h3Count,
  };
}

// ── Main ────────────────────────────────────────────────────────────
console.log('='.repeat(80));
console.log('  SEO 2026 AUDIT — ALL HTML PAGES');
console.log('='.repeat(80));

const htmlFiles = getAllHtmlFiles('.');
console.log(`\nFound ${htmlFiles.length} HTML files to audit\n`);

let allIssues = 0;
let allWarnings = 0;
let filesWithIssues = 0;
const results = [];

for (const file of htmlFiles) {
  const result = auditFile(file);
  results.push(result);

  if (result.issues.length > 0 || result.warnings.length > 0) {
    filesWithIssues++;
  }

  console.log(`\n── ${result.file} ──`);
  
  if (result.title) {
    console.log(`  Title: ${result.title}`);
  }
  if (result.metaDesc) {
    console.log(`  Desc:  ${result.metaDesc.substring(0, 80)}...`);
  }
  console.log(`  Imgs:  ${result.totalImgs} total, ${result.imgsWithoutAlt} missing alt`);
  console.log(`  Schema: ${result.jsonldCount} blocks (LocalBusiness: ${result.hasLocalBusiness ? 'Y' : 'N'}, Breadcrumb: ${result.hasBreadcrumb ? 'Y' : 'N'}, FAQ: ${result.hasFAQ ? 'Y' : 'N'})`);
  console.log(`  H1: ${result.h1Count}, H2: ${result.h2Count}, H3: ${result.h3Count}`);

  if (result.issues.length > 0) {
    console.log(`  ❌ ISSUES (${result.issues.length}):`);
    result.issues.forEach(i => console.log(`    - ${i}`));
    allIssues += result.issues.length;
  }
  if (result.warnings.length > 0) {
    console.log(`  ⚠️  Warnings (${result.warnings.length}):`);
    result.warnings.forEach(w => console.log(`    ${w}`));
    allWarnings += result.warnings.length;
  }
}

// ── Summary ─────────────────────────────────────────────────────────
console.log('\n' + '='.repeat(80));
console.log('  SUMMARY');
console.log('='.repeat(80));
console.log(`  Files audited:    ${htmlFiles.length}`);
console.log(`  Files with issues: ${filesWithIssues}`);
console.log(`  Total issues:     ${allIssues}`);
console.log(`  Total warnings:   ${allWarnings}`);
console.log('='.repeat(80));

// Write detailed report
const reportPath = 'seo-audit-report.json';
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
console.log(`\nDetailed report written to ${reportPath}`);
