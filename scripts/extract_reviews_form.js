const fs = require('fs');
const path = require('path');

const homeHtml = fs.readFileSync(path.join(__dirname, 'audit_raw', 'home.html'), 'utf-8');

// Check Trustindex or reviews
console.log('=== CHECKING REVIEWS IN HOME.HTML ===');
const reviewBlocks = [...homeHtml.matchAll(/<div[^>]*class=["'][^"']*ti-review-item[^"']*["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('Found review blocks:', reviewBlocks.length);

// Let's search for reviewer names or review texts
const tiReviews = [...homeHtml.matchAll(/<div[^>]*class=["'][^"']*ti-review-content[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi)];
console.log('ti-review-content count:', tiReviews.length);
tiReviews.forEach((r, i) => console.log(`Review ${i+1}:`, r[1].replace(/<[^>]+>/g, '').trim()));

// Let's search for reviewer names
const tiNames = [...homeHtml.matchAll(/<div[^>]*class=["'][^"']*ti-name[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi)];
console.log('ti-name count:', tiNames.length);
tiNames.forEach((n, i) => console.log(`Name ${i+1}:`, n[1].replace(/<[^>]+>/g, '').trim()));

// Check dates
const tiDates = [...homeHtml.matchAll(/<span[^>]*class=["'][^"']*ti-date[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi)];
tiDates.forEach((d, i) => console.log(`Date ${i+1}:`, d[1].replace(/<[^>]+>/g, '').trim()));

// Check form in home.html
console.log('\n=== CHECKING FORM IN HOME.HTML ===');
const formMatch = homeHtml.match(/<form[\s\S]*?<\/form>/i);
if (formMatch) {
  const inputs = [...formMatch[0].matchAll(/<(input|textarea|select|button)\b([^>]*)>/gi)].map(m => m[0]);
  console.log('Form inputs:', inputs);
} else {
  console.log('No form tag found directly, checking wpcf7 or similar');
  const wpcf7 = homeHtml.match(/<div[^>]*class=["'][^"']*wpcf7[^"']*["'][\s\S]*?<\/form>/i);
  if (wpcf7) console.log('Found wpcf7 form:', wpcf7[0].slice(0, 500));
}
