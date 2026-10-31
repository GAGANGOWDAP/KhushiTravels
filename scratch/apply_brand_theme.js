const fs = require('fs');
const path = require('path');

console.log('=== KHUSHI TRAVELS: BRAND BOOK COLOUR TRANSFORMATION ===');

// 1. Update app/globals.css
const globalsCssPath = path.join(__dirname, '../app/globals.css');
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

// Insert :root brand CSS variables if not present
if (!globalsCss.includes('--brand-primary:')) {
  globalsCss = globalsCss.replace(
    /--navbar-height:\s*80px;/,
    `--navbar-height: 80px;\n    --brand-primary: #080878;\n    --brand-primary-dark: #05055C;\n    --brand-primary-light: #24249B;\n    --brand-gold: #D8B43B;\n    --brand-gold-dark: #BFA044;\n    --brand-white: #FFFFFF;\n    --brand-black: #111111;\n    --brand-ivory: #F7F7FB;\n    --brand-light-blue: #E8E8F4;\n    --brand-slate: #55556B;`
  );
}

// Update .gradient-amber
globalsCss = globalsCss.replace(
  /linear-gradient\(135deg,\s*#f59e0b,\s*#f97316\)/g,
  'linear-gradient(135deg, #D8B43B, #BFA044)'
);

// Focus outline
globalsCss = globalsCss.replace(/outline:\s*2px solid #f59e0b;/g, 'outline: 2px solid #D8B43B;');

// Nav links hover / active
globalsCss = globalsCss.replace(/\.nav-link:hover\s*\{\s*color:\s*#f59e0b;\s*\}/g, '.nav-link:hover {\n    color: #D8B43B;\n  }');
globalsCss = globalsCss.replace(/\.nav-link\.active\s*\{\s*color:\s*#f59e0b;\s*font-weight:\s*600;\s*\}/g, '.nav-link.active {\n    color: #D8B43B;\n    font-weight: 600;\n  }');
globalsCss = globalsCss.replace(/\.nav-link\.active::after\s*\{[\s\S]*?background:\s*#f59e0b;/g, (match) => match.replace('#f59e0b', '#D8B43B'));

// Scrolled nav links
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-link\s*\{\s*color:\s*#1a365d;/g, '.site-header.scrolled .nav-link {\n    color: #080878;');
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-link:hover\s*\{\s*color:\s*#d97706;/g, '.site-header.scrolled .nav-link:hover {\n    color: #D8B43B;');
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-link\.active\s*\{\s*color:\s*#d97706;/g, '.site-header.scrolled .nav-link.active {\n    color: #D8B43B;');
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-link\.active::after\s*\{[\s\S]*?background:\s*#d97706;/g, (match) => match.replace('#d97706', '#D8B43B'));

// Action icon hover / scrolled
globalsCss = globalsCss.replace(/border-color:\s*#f59e0b;/g, 'border-color: #D8B43B;');
globalsCss = globalsCss.replace(/color:\s*#f59e0b;/g, 'color: #D8B43B;');
globalsCss = globalsCss.replace(/rgba\(245,\s*158,\s*11,\s*0\.25\)/g, 'rgba(216, 180, 59, 0.25)');
globalsCss = globalsCss.replace(/rgba\(26,\s*54,\s*93,\s*0\.06\)/g, 'rgba(8, 8, 120, 0.06)');
globalsCss = globalsCss.replace(/rgba\(26,\s*54,\s*93,\s*0\.1\)/g, 'rgba(8, 8, 120, 0.12)');
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.action-icon\s*\{[\s\S]*?color:\s*#1a365d;/g, (match) => match.replace('#1a365d', '#080878'));
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.action-icon:hover\s*\{[\s\S]*?background:\s*#1a365d;[\s\S]*?border-color:\s*#1a365d;/g, (m) => m.replace(/#1a365d/g, '#080878'));

// Nav phone button
globalsCss = globalsCss.replace(/linear-gradient\(135deg,\s*#f59e0b,\s*#d97706\)/g, 'linear-gradient(135deg, #D8B43B, #BFA044)');
globalsCss = globalsCss.replace(/\.nav-phone-btn\s*\{[\s\S]*?color:\s*#ffffff;/g, (match) => match.replace('#ffffff', '#111111'));
globalsCss = globalsCss.replace(/rgba\(245,\s*158,\s*11,\s*0\.35\)/g, 'rgba(216, 180, 59, 0.35)');
globalsCss = globalsCss.replace(/rgba\(245,\s*158,\s*11,\s*0\.45\)/g, 'rgba(216, 180, 59, 0.45)');
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-phone-btn\s*\{[\s\S]*?background:\s*#1a365d;[\s\S]*?color:\s*#ffffff;[\s\S]*?box-shadow:\s*0 4px 12px rgba\(26,\s*54,\s*93,\s*0\.25\);/g, 
  '.site-header.scrolled .nav-phone-btn {\n    background: #080878;\n    color: #ffffff;\n    box-shadow: 0 4px 12px rgba(8, 8, 120, 0.25);'
);
globalsCss = globalsCss.replace(/\.site-header\.scrolled\s*\.nav-phone-btn:hover\s*\{\s*background:\s*#10213a;\s*\}/g, 
  '.site-header.scrolled .nav-phone-btn:hover {\n    background: #05055C;\n  }'
);

// Menu toggle and mobile overlay
globalsCss = globalsCss.replace(/color:\s*#1a365d;/g, 'color: #080878;');
globalsCss = globalsCss.replace(/#f59e0b !important/g, '#D8B43B !important');
globalsCss = globalsCss.replace(/#f59e0b;/g, '#D8B43B;');

// Hero cinematic background colors
globalsCss = globalsCss.replace(/#071322/g, '#080878');
globalsCss = globalsCss.replace(/rgba\(7,\s*19,\s*34,/g, 'rgba(8, 8, 120,');

fs.writeFileSync(globalsCssPath, globalsCss, 'utf8');
console.log('✓ Updated app/globals.css');

// 2. Update components/Footer.tsx
const footerPath = path.join(__dirname, '../components/Footer.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer.replace(/#10213A/g, '#080878');
footer = footer.replace(/#0A1626/g, '#05055C');
footer = footer.replace(/#193454/g, '#05055C');
footer = footer.replace(/#F59E0B/g, '#D8B43B');
footer = footer.replace(/bg-amber-500\/10/g, 'bg-[#D8B43B]/10');
footer = footer.replace(/shadow-amber-500\/25/g, 'shadow-[#D8B43B]/25');
footer = footer.replace(/shadow-amber-500\/40/g, 'shadow-[#D8B43B]/40');
footer = footer.replace(/hover:text-amber-400/g, 'hover:text-[#D8B43B]');
footer = footer.replace(/gradient-amber text-white/g, 'bg-[#D8B43B] hover:bg-[#BFA044] text-[#111111]');

fs.writeFileSync(footerPath, footer, 'utf8');
console.log('✓ Updated components/Footer.tsx');

// 3. Update components/FeaturedPilgrimageCard.tsx
const featuredPath = path.join(__dirname, '../components/FeaturedPilgrimageCard.tsx');
let featured = fs.readFileSync(featuredPath, 'utf8');
featured = featured.replace(/#10213A/g, '#080878');
featured = featured.replace(/#071322/g, '#05055C');
featured = featured.replace(/#193454/g, '#05055C');
featured = featured.replace(/#f59e0b/g, '#D8B43B');
featured = featured.replace(/#C6A04A/g, '#D8B43B');
featured = featured.replace(/#E3C77E/g, '#D8B43B');
featured = featured.replace(/from-\[#f59e0b\] to-\[#d97706\]/g, 'from-[#D8B43B] to-[#BFA044]');
featured = featured.replace(/text-amber-300\/90/g, 'text-[#D8B43B]');
featured = featured.replace(/text-amber-400/g, 'text-[#D8B43B]');
featured = featured.replace(/text-amber-200\/95/g, 'text-amber-100');
featured = featured.replace(/text-amber-400\/90/g, 'text-[#D8B43B]');
featured = featured.replace(/rgba\(10,\s*20,\s*36,\s*0\.75\)/g, 'rgba(8, 8, 120, 0.65)');
featured = featured.replace(/rgba\(198,\s*160,\s*74,\s*0\.25\)/g, 'rgba(216, 180, 59, 0.25)');

fs.writeFileSync(featuredPath, featured, 'utf8');
console.log('✓ Updated components/FeaturedPilgrimageCard.tsx');

// 4. Update components/TravelNoticeTicker.tsx
const tickerPath = path.join(__dirname, '../components/TravelNoticeTicker.tsx');
let ticker = fs.readFileSync(tickerPath, 'utf8');
ticker = ticker.replace(/#C6A04A/g, '#D8B43B');
fs.writeFileSync(tickerPath, ticker, 'utf8');
console.log('✓ Updated components/TravelNoticeTicker.tsx');

// 5. Update components/Header.tsx
const headerPath = path.join(__dirname, '../components/Header.tsx');
let header = fs.readFileSync(headerPath, 'utf8');
header = header.replace(/#1a365d/g, '#080878');
header = header.replace(/bg-amber-50 text-amber-900 font-bold border border-amber-200/g, 'bg-[#D8B43B]/10 text-[#080878] font-bold border border-[#D8B43B]/30');
header = header.replace(/bg-amber-100 text-amber-900/g, 'bg-[#D8B43B]/20 text-[#080878]');
header = header.replace(/text-amber-500/g, 'text-[#D8B43B]');
header = header.replace(/text-amber-600/g, 'text-[#D8B43B]');
header = header.replace(/hover:text-amber-600/g, 'hover:text-[#D8B43B]');
fs.writeFileSync(headerPath, header, 'utf8');
console.log('✓ Updated components/Header.tsx');

// 6. Update app/page.tsx
const pagePath = path.join(__dirname, '../app/page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');
page = page.replace(/<span className="text-\[#f59e0b\]">Traveller<\/span>/g, '<span className="text-[#D8B43B]">Traveller</span>');
page = page.replace(/text-amber-500/g, 'text-brand-gold');
fs.writeFileSync(pagePath, page, 'utf8');
console.log('✓ Updated app/page.tsx');

// 7. Update app/packages/kashi-triveni-ayodhya/
const kashiEnquiryPath = path.join(__dirname, '../app/packages/kashi-triveni-ayodhya/KashiEnquiryForm.tsx');
let kashiEnquiry = fs.readFileSync(kashiEnquiryPath, 'utf8');
kashiEnquiry = kashiEnquiry.replace(/#10213A/g, '#080878');
kashiEnquiry = kashiEnquiry.replace(/#F59E0B/g, '#D8B43B');
kashiEnquiry = kashiEnquiry.replace(/#F8F7F3/g, '#F7F7FB');
kashiEnquiry = kashiEnquiry.replace(/#E8E6E0/g, '#E8E8F4');
kashiEnquiry = kashiEnquiry.replace(/from-\[#10213A\] to-\[#1E3A5F\]/g, 'from-[#080878] to-[#05055C]');
kashiEnquiry = kashiEnquiry.replace(/from-\[#F59E0B\] to-\[#D97706\]/g, 'from-[#D8B43B] to-[#BFA044]');
fs.writeFileSync(kashiEnquiryPath, kashiEnquiry, 'utf8');
console.log('✓ Updated KashiEnquiryForm.tsx');

const kashiDetailPath = path.join(__dirname, '../app/packages/kashi-triveni-ayodhya/KashiPackageDetailClient.tsx');
let kashiDetail = fs.readFileSync(kashiDetailPath, 'utf8');
kashiDetail = kashiDetail.replace(/#10213A/g, '#080878');
kashiDetail = kashiDetail.replace(/#1E3A5F/g, '#05055C');
kashiDetail = kashiDetail.replace(/#C6A04A/g, '#D8B43B');
kashiDetail = kashiDetail.replace(/#E3C77E/g, '#D8B43B');
kashiDetail = kashiDetail.replace(/#F8F7F3/g, '#F7F7FB');
kashiDetail = kashiDetail.replace(/#E8E6E0/g, '#E8E8F4');
kashiDetail = kashiDetail.replace(/#F59E0B/g, '#D8B43B');
fs.writeFileSync(kashiDetailPath, kashiDetail, 'utf8');
console.log('✓ Updated KashiPackageDetailClient.tsx');

// 8. Update app/spiritual-pilgrimage-tours/page.tsx
const spiritualPath = path.join(__dirname, '../app/spiritual-pilgrimage-tours/page.tsx');
let spiritual = fs.readFileSync(spiritualPath, 'utf8');
spiritual = spiritual.replace(/#10213A/g, '#080878');
spiritual = spiritual.replace(/#F59E0B/g, '#D8B43B');
spiritual = spiritual.replace(/#EAECEF/g, '#E8E8F4');
fs.writeFileSync(spiritualPath, spiritual, 'utf8');
console.log('✓ Updated app/spiritual-pilgrimage-tours/page.tsx');

console.log('All brand book colours transformed successfully!');

