const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

console.log('--- Verification Report ---');
console.log('1. Has role="tab":', html.includes('role="tab"'));
console.log('2. Has Curated Pilgrimage Circuits:', html.includes('Curated Pilgrimage Circuits'));
console.log('3. Has Featured Spiritual Yatra Packages:', html.includes('Featured Spiritual Yatra Packages'));
console.log('4. Has Brand Royal Navy #080878 in HTML:', html.includes('#080878'));
console.log('5. Has Brand Signature Gold #D8B43B in HTML:', html.includes('#D8B43B'));
console.log('6. Has Old Navy #10213A in HTML:', html.includes('#10213A'));
console.log('7. Has Old Amber #f59e0b in HTML:', html.includes('#f59e0b') || html.includes('#F59E0B'));

