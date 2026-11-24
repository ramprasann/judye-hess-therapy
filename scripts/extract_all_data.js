const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'audit_raw');

function cleanText(t) {
  if (!t) return '';
  return t
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&#010;/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function getPage(file) {
  const html = fs.readFileSync(path.join(dir, file), 'utf-8');
  return html;
}

// Let's inspect each page's specific content blocks
const pages = [
  'home.html',
  'my-practice.html',
  'about-me.html',
  'my-qualifications.html',
  'publications.html',
  'family-therapy.html',
  'couples-therapy.html',
  'group-therapy.html',
  'contact-location.html',
  'less-is-more.html',
  'walking-the-tightrope-of-intimacy.html',
  'dual-dwelling-duos.html',
  'got-questions.html'
];

const extracted = {};

pages.forEach(p => {
  const html = getPage(p);
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
  
  // Get all paragraphs
  // Filter out footer/nav paragraphs
  const entryMatch = html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                     html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/article>/i) ||
                     html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);

  const container = entryMatch ? entryMatch[1] : html;

  // Extract structured elements in order: h1, h2, h3, h4, p, ul, ol, blockquote
  const matches = [...container.matchAll(/<(h[1-6]|p|blockquote|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi)];
  
  const blocks = matches.map(m => {
    const tag = m[1].toLowerCase();
    const innerHtml = m[2];
    if (tag === 'ul' || tag === 'ol') {
      const items = [...innerHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
        .map(li => cleanText(li[1]))
        .filter(t => t.length > 0);
      return { type: 'list', tag, items };
    }
    const text = cleanText(innerHtml);
    return { type: tag === 'blockquote' ? 'quote' : (tag.startsWith('h') ? 'heading' : 'paragraph'), level: tag.startsWith('h') ? parseInt(tag[1]) : undefined, text, rawHtml: innerHtml };
  }).filter(b => {
    if (b.type === 'list') return b.items.length > 0;
    return b.text.length > 0 && 
           !b.text.includes('Proudly powered by') && 
           !b.text.includes('Theme:') && 
           !b.text.includes('Skip to content') &&
           !b.text.includes('Search for:');
  });

  extracted[p] = { title, blocks };
});

fs.writeFileSync(path.join(__dirname, 'extracted_blocks.json'), JSON.stringify(extracted, null, 2), 'utf-8');
console.log('Successfully extracted content blocks from all pages!');
for (const [p, data] of Object.entries(extracted)) {
  console.log(`\n=== ${p} (Blocks: ${data.blocks.length}) ===`);
  data.blocks.forEach((b, idx) => {
    if (b.type === 'heading') console.log(`  H${b.level}: ${b.text}`);
    else if (b.type === 'quote') console.log(`  QUOTE: "${b.text}"`);
    else if (b.type === 'list') console.log(`  LIST (${b.items.length} items): ${b.items[0]} ...`);
    else if (idx < 5) console.log(`  P: ${b.text.slice(0, 100)}...`);
  });
}
