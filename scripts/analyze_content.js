const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'audit_raw');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.includes('wp-login'));

function extractPageDetails(filename) {
  const content = fs.readFileSync(path.join(dir, filename), 'utf-8');
  
  // Extract main article / content section
  // WordPress usually has <article> or <div class="entry-content"> or <main>
  let mainContent = '';
  const entryMatch = content.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                     content.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/article>/i) ||
                     content.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                     content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  
  // Also check for review widget or custom blocks
  const trustIndexMatch = content.match(/class=["'][^"']*ti-widget[^"']*["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
  
  // Extract all paragraphs
  const paragraphs = [...content.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 20 && !p.includes('Proudly powered by') && !p.includes('Theme:') && !p.includes('Cookie'));

  // Extract all blockquotes
  const quotes = [...content.matchAll(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

  // Extract h1, h2, h3
  const headings = [...content.matchAll(/<(h[1-4])\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => ({ tag: m[1].toLowerCase(), text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() }))
    .filter(h => h.text.length > 0);

  // Extract images
  const imgs = [...content.matchAll(/<img\b([^>]*)>/gi)].map(m => {
    const src = (m[1].match(/src=["']([^"']*)["']/i) || [])[1];
    const alt = (m[1].match(/alt=["']([^"']*)["']/i) || [])[1];
    return { src, alt };
  }).filter(i => i.src);

  return {
    filename,
    headings,
    quotes,
    paragraphCount: paragraphs.length,
    sampleParagraphs: paragraphs.slice(0, 3),
    images: imgs
  };
}

const report = files.map(extractPageDetails);
fs.writeFileSync(path.join(dir, 'content_analysis.json'), JSON.stringify(report, null, 2), 'utf-8');
console.log('Analyzed', report.length, 'HTML files.');
for (const r of report) {
  console.log(`\nPage: ${r.filename}`);
  console.log(`Headings (${r.headings.length}):`, r.headings.map(h => `${h.tag}: ${h.text}`).join(' | '));
  console.log(`Images (${r.images.length}):`, r.images.map(i => i.src).join(' | '));
  console.log(`Quotes (${r.quotes.length}):`, r.quotes);
}
