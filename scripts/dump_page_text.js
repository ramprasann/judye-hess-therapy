const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'audit_raw');

function getHtml(file) {
  return fs.readFileSync(path.join(dir, file), 'utf-8');
}

// Let's inspect home.html
const home = getHtml('home.html');
console.log('=== HOME TITLE ===');
console.log(home.match(/<title>([^<]+)<\/title>/)[1]);

// Let's write a parser that dumps clean content for every file
const pagesToInspect = [
  'home.html',
  'my-practice.html',
  'about-me.html',
  'my-qualifications.html',
  'publications.html',
  'family-therapy.html',
  'couples-therapy.html',
  'group-therapy.html',
  'contact-location.html',
  'blog.html',
  'less-is-more.html',
  'walking-the-tightrope-of-intimacy.html',
  'dual-dwelling-duos.html',
  'got-questions.html'
];

for (const p of pagesToInspect) {
  const html = getHtml(p);
  console.log(`\n================= PAGE: ${p} =================`);
  
  // Extract entry content if present
  const entry = html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  
  const content = entry ? entry[1] : html;
  
  // Look for headings and paragraphs
  const elements = [...content.matchAll(/<(h[1-6]|p|blockquote|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => {
      const tag = m[1].toLowerCase();
      const rawText = m[2];
      const text = rawText.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#8211;/g, '–').replace(/&#8212;/g, '—').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      return { tag, text, raw: rawText };
    })
    .filter(e => e.text.length > 0 && !e.text.includes('Proudly powered by') && !e.text.includes('Theme:') && !e.text.includes('Skip to content'));

  console.log(`Total elements: ${elements.length}`);
  elements.forEach((e, idx) => {
    if (idx < 15 || e.tag.startsWith('h')) {
      console.log(`[${e.tag.toUpperCase()}] ${e.text}`);
    }
  });
}
