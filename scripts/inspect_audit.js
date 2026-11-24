const fs = require('fs');
const path = require('path');

const summaryPath = path.join(__dirname, 'audit_raw', 'audit_summary.json');
const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));

console.log('=== PAGES FOUND ===');
for (const [url, data] of Object.entries(summary.pages)) {
  if (data.error) {
    console.log(`[ERROR: ${data.error}] ${url}`);
  } else {
    console.log(`[SLUG: ${data.slug}] ${url} | Title: ${data.title}`);
  }
}

console.log('\n=== UNIQUE IMAGES ===');
summary.images.forEach((img, i) => console.log(`${i + 1}. ${img}`));

console.log('\n=== EXTERNAL LINKS ===');
summary.externalLinks.forEach((link, i) => console.log(`${i + 1}. ${link}`));
