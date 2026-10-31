const fs = require('fs');
const path = require('path');

// Helper to extract slugs without needing ts-node
function extractSlugsFromTsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slugs = [];
  const regex = /slug:\s*["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

const SITE_URL = 'https://gagangowdap.github.io/KhushiTravels';
const TODAY = new Date().toISOString().split('T')[0];

const fleetSlugs = extractSlugsFromTsFile('data/fleet.ts');
const localitySlugs = extractSlugsFromTsFile('data/localities.ts');
const routeSlugs = extractSlugsFromTsFile('data/routes.ts');
const serviceSlugs = extractSlugsFromTsFile('data/services.ts');

// For packages, read data/packages.ts
const packageContent = fs.readFileSync('data/packages.ts', 'utf8');
function extractPackagesByCategory(categoryName) {
  const sectionMatch = packageContent.match(new RegExp(`export const ${categoryName}[\\s\\S]*?= \\[(\\s*\\{[\\s\\S]*?\\n\\]);`));
  if (!sectionMatch) return [];
  const slugs = [];
  const r = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = r.exec(sectionMatch[1])) !== null) {
    if (!slugs.includes(m[1])) slugs.push(m[1]);
  }
  return slugs;
}

const normalPkgSlugs = extractPackagesByCategory('NORMAL_PACKAGES');
const specialPkgSlugs = extractPackagesByCategory('SPECIAL_PACKAGES');
const weekendPkgSlugs = extractPackagesByCategory('WEEKEND_PACKAGES');

console.log('Extracted slugs:');
console.log('Fleet:', fleetSlugs.length);
console.log('Localities:', localitySlugs.length);
console.log('Routes:', routeSlugs.length);
console.log('Services:', serviceSlugs.length);
console.log('Normal Packages:', normalPkgSlugs.length);
console.log('Special Packages:', specialPkgSlugs.length);
console.log('Weekend Packages:', weekendPkgSlugs.length);

const urls = [];

function addUrl(pathname, priority = '0.7', changefreq = 'weekly') {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  const loc = clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
  if (!urls.some(u => u.loc === loc)) {
    urls.push({ loc, priority, changefreq, lastmod: TODAY });
  }
}

// 1. Primary Hub & Core Pages
addUrl('', '1.0', 'daily'); // Homepage
addUrl('best-tempo-traveller-fleet-bangalore', '0.9', 'weekly');
addUrl('hire-tempo-traveller-bangalore', '0.9', 'weekly');
addUrl('tempo-traveller-rent-price-bangalore', '0.9', 'weekly');
addUrl('tour-packages-from-bangalore', '0.9', 'weekly');
addUrl('spiritual-pilgrimage-tours', '0.9', 'weekly');
addUrl('pilgrimage-packages', '0.85', 'weekly');
addUrl('packages', '0.85', 'weekly');
addUrl('packages/normal', '0.85', 'weekly');
addUrl('packages/special', '0.85', 'weekly');
addUrl('packages/weekend', '0.85', 'weekly');
addUrl('packages/kashi-triveni-ayodhya', '0.9', 'weekly');

// 2. Fleet Vehicle Pages
fleetSlugs.forEach(slug => {
  addUrl(`fleet/${slug}`, '0.8', 'weekly');
});

// 3. Bangalore Localities
localitySlugs.forEach(slug => {
  addUrl(`localities/${slug}`, '0.8', 'weekly');
});

// 4. Outstation Routes
routeSlugs.forEach(slug => {
  addUrl(`routes/${slug}`, '0.8', 'weekly');
});

// 5. Special Services
serviceSlugs.forEach(slug => {
  addUrl(`services/${slug}`, '0.75', 'weekly');
});

// 6. Tour Packages
normalPkgSlugs.forEach(slug => {
  addUrl(`packages/normal/${slug}`, '0.75', 'weekly');
});
specialPkgSlugs.forEach(slug => {
  addUrl(`packages/special/${slug}`, '0.8', 'weekly');
});
weekendPkgSlugs.forEach(slug => {
  addUrl(`packages/weekend/${slug}`, '0.75', 'weekly');
});

// 7. Policy Pages
addUrl('privacy', '0.3', 'monthly');
addUrl('terms', '0.3', 'monthly');

console.log('Total URLs compiled for sitemap:', urls.length);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

# Production XML Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf8');
fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8');
fs.writeFileSync('robots.txt', robotsTxt, 'utf8');

console.log('✓ Successfully wrote public/sitemap.xml and sitemap.xml');
console.log('✓ Successfully wrote public/robots.txt and robots.txt');

