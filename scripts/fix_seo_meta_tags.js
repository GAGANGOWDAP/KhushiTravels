#!/usr/bin/env node
/**
 * fix_seo_meta_tags.js
 * Fixes all remaining SEO issues found in the audit:
 * 1. Adds missing OG description + Twitter tags to 15 locality pages
 * 2. Adds missing OG description + Twitter tags to 3 service pages
 * 3. Fixes broken image references in luxury-car-rental-bangalore.html
 */

const fs = require('fs');
const path = require('path');

// ── Files to fix ────────────────────────────────────────────────────

const LOCALITY_FILES = [
  'localities/tempo-traveller-in-banashankari-bangalore.html',
  'localities/tempo-traveller-in-btm-layout-bangalore.html',
  'localities/tempo-traveller-in-electronic-city-bangalore.html',
  'localities/tempo-traveller-in-hebbal-bangalore.html',
  'localities/tempo-traveller-in-hsr-layout-bangalore.html',
  'localities/tempo-traveller-in-indiranagar-bangalore.html',
  'localities/tempo-traveller-in-jayanagar-bangalore.html',
  'localities/tempo-traveller-in-jp-nagar-bangalore.html',
  'localities/tempo-traveller-in-koramangala-bangalore.html',
  'localities/tempo-traveller-in-marathahalli-bangalore.html',
  'localities/tempo-traveller-in-mg-road-bangalore.html',
  'localities/tempo-traveller-in-rajajinagar-bangalore.html',
  'localities/tempo-traveller-in-whitefield-bangalore.html',
  'localities/tempo-traveller-in-yelahanka-bangalore.html',
  'localities/tempo-traveller-in-yeshwanthpur-bangalore.html',
];

const SERVICE_FILES = [
  'services/airport-transfer-tempo-traveller-bangalore.html',
  'services/corporate-tempo-traveller-rental-bangalore.html',
  'services/wedding-guest-transport-tempo-traveller-bangalore.html',
];

const LUXURY_CAR_FILE = 'fleet/luxury-car-rental-bangalore.html';

// ── Helper: Add missing social meta tags ────────────────────────────

function addSocialMetaTags(filePath, localityName, description, imagePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const siteUrl = 'https://khushitravel.in';
  const relPath = path.relative(path.dirname(filePath), 'images/fleet/standard-12-seater-tempo-traveller-bangalore-1.webp').replace(/\\/g, '/');
  const ogImage = imagePath || `${siteUrl}/images/fleet/standard-12-seater-tempo-traveller-bangalore-1.webp`;

  // If the image path is relative, make it absolute
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  // Check what's already present
  const hasOgDesc = /og:description/.test(content);
  const hasTwitterCard = /twitter:card/.test(content);
  const hasTwitterTitle = /twitter:title/.test(content);
  const hasTwitterDesc = /twitter:description/.test(content);
  const hasTwitterImage = /twitter:image/.test(content);

  // Build missing tags
  let missingTags = '';

  if (!hasOgDesc) {
    missingTags += `  <meta property="og:description" content="${description}" />\n`;
  }
  if (!hasTwitterCard) {
    missingTags += `  <meta name="twitter:card" content="summary_large_image" />\n`;
  }
  if (!hasTwitterTitle) {
    missingTags += `  <meta name="twitter:title" content="Tempo Traveller in ${localityName} Bangalore | Khushi Travels" />\n`;
  }
  if (!hasTwitterDesc) {
    missingTags += `  <meta name="twitter:description" content="${description}" />\n`;
  }
  if (!hasTwitterImage) {
    missingTags += `  <meta name="twitter:image" content="${finalOgImage}" />\n`;
  }

  if (!missingTags) {
    console.log(`  ✓ Already has all tags: ${path.basename(filePath)}`);
    return;
  }

  // Insert after the last OG tag (og:image) or after canonical
  const insertPoint = content.lastIndexOf('/>');
  if (insertPoint === -1) {
    // Fallback: insert after canonical
    const canonEnd = content.indexOf('/>', content.indexOf('canonical'));
    if (canonEnd !== -1) {
      const before = content.slice(0, canonEnd + 2);
      const after = content.slice(canonEnd + 2);
      content = before + '\n' + missingTags + after;
    }
  } else {
    const before = content.slice(0, insertPoint + 2);
    const after = content.slice(insertPoint + 2);
    content = before + '\n' + missingTags + after;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ Added ${missingTags.split('\n').filter(l => l.trim()).length} tags: ${path.basename(filePath)}`);
}

// ── Helper: Fix broken images in luxury-car page ────────────────────

function fixLuxuryCarImages(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const oldImagePath = 'khushi-travels-vehicle-sail-sedan-4-seater-luxury-car-rental-services-500x500-1-(1).webp';
  const newImagePath = 'luxury-car-bangalore-1.webp';

  if (content.includes(oldImagePath)) {
    const count = (content.match(new RegExp(oldImagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    content = content.split(oldImagePath).join(newImagePath);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Fixed ${count} broken image references: ${path.basename(filePath)}`);
  } else {
    console.log(`  ✓ No broken images found: ${path.basename(filePath)}`);
  }
}

// ── Locality descriptions ──────────────────────────────────────────

const localityMeta = {
  'banashankari': { name: 'Banashankari', desc: 'Book tempo traveller in Banashankari, Bangalore at ₹19/km. Free pickup in Banashankari 2nd Stage, BSK. 9, 12, 14 seater options. 100% owned fleet.' },
  'btm-layout': { name: 'BTM Layout', desc: 'Book tempo traveller in BTM Layout, Bangalore at ₹19/km. Free pickup in BTM, MICO Layout, Tavarekere. 9, 12, 14 seater options. 100% owned fleet.' },
  'electronic-city': { name: 'Electronic City', desc: 'Book tempo traveller in Electronic City, Bangalore at ₹19/km. Free pickup from E-City Phase 1 & 2, Wipro, Infosys gates. 9, 12, 14 seater options.' },
  'hebbal': { name: 'Hebbal', desc: 'Book tempo traveller in Hebbal, Bangalore at ₹19/km. Free pickup in Hebbal, Manyata Tech Park, Esteem Mall. 9, 12, 14 seater options.' },
  'hsr-layout': { name: 'HSR Layout', desc: 'Book tempo traveller in HSR Layout, Bangalore at ₹19/km. Free pickup in HSR Layout Sector 1-3, Silk Board. 9, 12, 14 seater options.' },
  'indiranagar': { name: 'Indiranagar', desc: 'Book tempo traveller in Indiranagar, Bangalore at ₹19/km. Free pickup in Indiranagar, CMH Road, 100 Feet Road. 9, 12, 14 seater options.' },
  'jayanagar': { name: 'Jayanagar', desc: 'Book tempo traveller in Jayanagar, Bangalore at ₹19/km. Free pickup in Jayanagar 4th Block, JP Nagar. 9, 12, 14 seater options.' },
  'jp-nagar': { name: 'JP Nagar', desc: 'Book tempo traveller in JP Nagar, Bangalore at ₹19/km. Free pickup in JP Nagar Phase 1-7, Sarakki. 9, 12, 14 seater options.' },
  'koramangala': { name: 'Koramangala', desc: 'Book tempo traveller in Koramangala, Bangalore at ₹19/km. Free pickup in Koramangala, Sony World, Forum Mall. 9, 12, 14 seater options.' },
  'marathahalli': { name: 'Marathahalli', desc: 'Book tempo traveller in Marathahalli, Bangalore at ₹19/km. Free pickup from Marathahalli ORR, Bellandur, Sarjapur. 9, 12, 14 seater options.' },
  'mg-road': { name: 'MG Road', desc: 'Book tempo traveller on MG Road, Bangalore at ₹19/km. Free pickup in MG Road, Commercial Street, Brigade Road. 9, 12, 14 seater options.' },
  'rajajinagar': { name: 'Rajajinagar', desc: 'Book tempo traveller in Rajajinagar, Bangalore at ₹19/km. Free pickup in Rajajinagar, Malleswaram, Basaveshwaranagar. 9, 12, 14 seater options.' },
  'whitefield': { name: 'Whitefield', desc: 'Book tempo traveller in Whitefield, Bangalore at ₹19/km. Free pickup in Whitefield, ITPL, Hoodi, Brookefield. 9, 12, 14 seater options.' },
  'yelahanka': { name: 'Yelahanka', desc: 'Book tempo traveller in Yelahanka, Bangalore at ₹19/km. Free pickup in Yelahanka New Town, NES. 9, 12, 14 seater options.' },
  'yeshwanthpur': { name: 'Yeshwanthpur', desc: 'Book tempo traveller in Yeshwanthpur, Bangalore at ₹19/km. Free pickup in Yeshwanthpur, Mathikere, Peenya. 9, 12, 14 seater options.' },
};

// ── Service descriptions ───────────────────────────────────────────

const serviceMeta = {
  'airport-transfer': { name: 'Airport Transfer', desc: 'Book airport transfer tempo traveller in Bangalore at ₹19/km. BLR airport pickup & drop 24/7. 9, 12, 14 seater options. GPS tracked, sanitized fleet.' },
  'corporate': { name: 'Corporate Tempo Traveller', desc: 'Corporate tempo traveller rental in Bangalore at ₹19/km. Employee shuttle, factory transport, event transport. 9-50 seater fleet. Monthly contracts available.' },
  'wedding': { name: 'Wedding Guest Transport', desc: 'Wedding guest transport by tempo traveller in Bangalore at ₹19/km. 9-50 seater fleet for guest pickup/drop. Marriage family transport. 100% owned fleet.' },
};

// ── Main ────────────────────────────────────────────────────────────

console.log('='.repeat(60));
console.log('  FIXING SEO META TAGS');
console.log('='.repeat(60));

// 1. Fix locality pages
console.log('\n--- Localities ---');
for (const file of LOCALITY_FILES) {
  const key = path.basename(file).replace('tempo-traveller-in-', '').replace('-bangalore.html', '');
  const meta = localityMeta[key];
  if (meta) {
    addSocialMetaTags(file, meta.name, meta.desc);
  } else {
    console.log(`  ? No meta found for: ${path.basename(file)}`);
  }
}

// 2. Fix service pages
console.log('\n--- Services ---');
for (const file of SERVICE_FILES) {
  const key = path.basename(file).startsWith('airport') ? 'airport-transfer'
    : path.basename(file).startsWith('corporate') ? 'corporate'
    : 'wedding';
  const meta = serviceMeta[key];
  if (meta) {
    // Determine the right og:image for each service
    let imgPath;
    if (key === 'airport-transfer') {
      imgPath = 'https://khushitravel.in/images/fleet/toyota-innova-crysta-bangalore-1.webp';
    } else if (key === 'corporate') {
      imgPath = 'https://khushitravel.in/images/fleet/standard-12-seater-tempo-traveller-bangalore-1.webp';
    } else {
      imgPath = 'https://khushitravel.in/images/fleet/luxury-10-seater-tempo-traveller-bangalore-1.webp';
    }
    addSocialMetaTags(file, meta.name, meta.desc, imgPath);
  }
}

// 3. Fix luxury car broken images
console.log('\n--- Luxury Car Page ---');
fixLuxuryCarImages(LUXURY_CAR_FILE);

console.log('\n' + '='.repeat(60));
console.log('  DONE — All SEO issues fixed');
console.log('='.repeat(60));
