const fs = require('fs');
const path = require('path');

// Collect all HTML files
const htmlFiles = [];
function walkHtml(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!f.startsWith('.')) walkHtml(full);
    } else if (f.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}
walkHtml('.');

// Collect all existing image files
const existingImages = new Set();
function walkImages(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkImages(full);
    } else if (f.match(/\.(webp|jpg|jpeg|png|gif|svg)$/i)) {
      existingImages.add(full.replace(/\\/g, '/'));
    }
  }
}
walkImages('images');

// Pattern to find image references in HTML
const imgRegex = /src=["']([^"']+\.(?:webp|jpg|jpeg|png|gif|svg))["']|background(?:-image)?:[^}]*url\(["']?([^"')]+\.(?:webp|jpg|jpeg|png|gif|svg))["']?\)/gi;

let totalBroken = 0;
const brokenRefs = [];

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  const matches = [];
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    const ref = (m[1] || m[2] || '').split('?')[0];
    if (ref) matches.push(ref);
  }

  // Also find images in JSON-LD
  const jsonRefs = content.match(/"image":\s*"([^"]+\.(?:webp|jpg|jpeg|png|gif|svg))/gi);
  if (jsonRefs) {
    for (const jr of jsonRefs) {
      const ref = jr.replace(/"image":\s*"/, '').replace(/".*$/, '');
      if (ref) matches.push(ref);
    }
  }

  // Also check og:image and twitter:image meta tags
  const metaRefs = content.match(/content="([^"]+\.(?:webp|jpg|jpeg|png|gif|svg))"/gi);
  if (metaRefs) {
    for (const mr of metaRefs) {
      const ref = mr.replace(/^content="/, '').replace(/"$/, '');
      if (ref.match(/(og|twitter).*image/i) || ref.includes('/images/')) {
        if (ref && !matches.includes(ref)) matches.push(ref);
      }
    }
  }

  const fileBroken = [];
  for (const ref of [...new Set(matches)]) {
    let relPath = ref;
    // Skip external URLs that don't point to our site
    if (ref.startsWith('http')) {
      if (ref.includes('/images/')) {
        const localPath = ref.split('/images/')[1];
        relPath = 'images/' + localPath;
      } else if (ref.includes('khushitravel.in')) {
        const u = new URL(ref);
        relPath = u.pathname.replace(/^\//, '');
      } else {
        continue;
      }
    }

    // Resolve relative to the HTML file
    const htmlDir = path.dirname(htmlFile);
    const resolved = path.resolve(htmlDir, relPath).replace(/\\/g, '/');

    // Check if file exists
    if (!fs.existsSync(resolved) && !existingImages.has(resolved)) {
      fileBroken.push(ref);
      totalBroken++;
    }
  }

  if (fileBroken.length > 0) {
    brokenRefs.push({ file: htmlFile, broken: [...new Set(fileBroken)] });
  }
}

// Output
console.log('=== BROKEN IMAGE REFERENCES IN HTML FILES ===\n');
if (brokenRefs.length === 0) {
  console.log('No broken image references found!');
} else {
  for (const br of brokenRefs) {
    const relPath = path.relative('.', br.file).replace(/\\/g, '/');
    console.log(relPath);
    for (const ref of br.broken) {
      console.log('  ' + ref);
    }
    console.log('');
  }
  console.log('Total: ' + brokenRefs.length + ' HTML files with ' + totalBroken + ' broken image reference(s)');
}
