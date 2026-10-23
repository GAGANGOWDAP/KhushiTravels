const fs = require('fs');
const path = require('path');

// ─── File rename mapping: old name → new name ──────────────────────────────
const fileRenames = {
  // Fix misspelling
  'images/destinations/hydrabad.webp': 'images/destinations/hyderabad.webp',
  // Fix pipeline-artifact fleet name 
  'images/fleet/tempo-traveller-bangalore-luxury-bus.webp': 'images/fleet/luxury-bus-bangalore.webp',
};

// ─── HTML fix mapping: old string → new string ─────────────────────────────
const htmlFixes = [
  // Fix spaces & special chars in tour-packages-from-bangalore.html
  { file: 'tour-packages-from-bangalore.html', old: 'Puri Jagannath.webp', new: 'puri-jagannath.webp' },
  { file: 'tour-packages-from-bangalore.html', old: 'Belur & Halebidu.webp', new: 'belur-halebidu.webp' },
  { file: 'tour-packages-from-bangalore.html', old: 'Badami & Aihole.webp', new: 'badami-aihole.webp' },
  { file: 'tour-packages-from-bangalore.html', old: 'Kunti Betta.webp', new: 'kunti-betta.webp' },
  // Fix old pipeline name in chennai route
  { file: 'routes/bangalore-to-chennai-tempo-traveller.html', old: 'tour-package-bangalore-tour-package-tour-package-tour-package-pondicherry.webp', new: 'pondicherry.webp' },
  // Fix hyderabad route to reference correct filename
  { file: 'routes/bangalore-to-hyderabad-tempo-traveller.html', old: 'hyderabad.webp', new: 'hyderabad.webp' },
];

// ─── Step 1: Rename files ──────────────────────────────────────────────────
console.log('=== Renaming Files ===');
for (const [oldPath, newPath] of Object.entries(fileRenames)) {
  const fullOld = path.resolve(oldPath);
  const fullNew = path.resolve(newPath);
  
  if (fs.existsSync(fullOld)) {
    // Ensure target directory exists
    const dir = path.dirname(fullNew);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.renameSync(fullOld, fullNew);
    console.log(`  ✓ ${oldPath} → ${path.basename(newPath)}`);
  } else if (fs.existsSync(fullNew)) {
    console.log(`  - ${path.basename(oldPath)} already renamed (target exists)`);
  } else {
    console.log(`  ✗ ${oldPath} not found (may already be fixed)`);
  }
}

// ─── Step 2: Fix HTML references ───────────────────────────────────────────
console.log('\n=== Fixing HTML References ===');
let fixedCount = 0;

for (const fix of htmlFixes) {
  const fullPath = path.resolve(fix.file);
  if (!fs.existsSync(fullPath)) {
    console.log(`  ✗ ${fix.file} not found`);
    continue;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(fix.old)) {
    const replaced = content.replace(new RegExp(fix.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.new);
    fs.writeFileSync(fullPath, replaced, 'utf8');
    const count = (content.match(new RegExp(fix.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    console.log(`  ✓ ${fix.file}: ${fix.old} → ${fix.new} (${count} occurrence${count>1?'s':''})`);
    fixedCount++;
  } else {
    console.log(`  - ${fix.file}: No match for "${fix.old}" (already fixed?)`);
  }
}

// ─── Step 3: Clean up fleet 2 directory ────────────────────────────────────
console.log('\n=== Cleaning up fleet 2 directory ===');
const fleet2Dir = path.resolve('images/fleet 2');
if (fs.existsSync(fleet2Dir)) {
  const files = fs.readdirSync(fleet2Dir);
  for (const f of files) {
    const full = path.join(fleet2Dir, f);
    fs.rmSync(full);
    console.log(`  ✗ Deleted fleet 2/${f}`);
  }
  fs.rmdirSync(fleet2Dir);
  console.log(`  ✓ Removed fleet 2/ directory (${files.length} files deleted)`);
} else {
  console.log('  - fleet 2/ directory already removed');
}

// ─── Step 4: Verify ────────────────────────────────────────────────────────
console.log('\n=== Verification ===');

// Check that renamed files exist
for (const [, newPath] of Object.entries(fileRenames)) {
  const full = path.resolve(newPath);
  console.log(`  ${fs.existsSync(full) ? '✓' : '✗'} ${newPath}`);
}

// Check for any remaining references with spaces in destination filenames
const allHtmlFiles = [];
function walkHtml(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!f.startsWith('.')) walkHtml(full);
    } else if (f.endsWith('.html')) {
      allHtmlFiles.push(full);
    }
  }
}
walkHtml('.');

let remainingIssues = 0;
for (const htmlFile of allHtmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  // Check for destination image references with spaces or pipeline prefixes
  const badRefs = content.match(/images\/destinations\/[^"'\s)]+[\s&][^"'\s)]+\.webp/g);
  if (badRefs) {
    console.log(`\n  ⚠ Remaining bad refs in ${path.relative('.', htmlFile)}:`);
    for (const ref of [...new Set(badRefs)]) {
      console.log(`     ${ref}`);
      remainingIssues++;
    }
  }
}

if (remainingIssues === 0) {
  console.log('  ✓ No remaining references with spaces/special chars in destination filenames');
}

console.log('\n✅ Done!');
