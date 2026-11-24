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

const blogFiles = [
  'less-is-more.html',
  'walking-the-tightrope-of-intimacy.html',
  'dual-dwelling-duos.html',
  'got-questions.html'
];

blogFiles.forEach(file => {
  const html = fs.readFileSync(path.join(dir, file), 'utf-8');
  console.log(`\n======================= BLOG POST: ${file} =======================`);
  
  // Find article
  const articleMatch = html.match(/<article[^>]*id=["']post-\d+["'][^>]*>([\s\S]*?)<\/article>/i);
  const articleHtml = articleMatch ? articleMatch[1] : html;

  // Title
  const titleMatch = articleHtml.match(/<h1[^>]*class=["'][^"']*entry-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  // Meta (date, author, category)
  const dateMatch = articleHtml.match(/<time[^>]*class=["'][^"']*entry-date[^"']*["'][^>]*>([\s\S]*?)<\/time>/i) ||
                    articleHtml.match(/<span[^>]*class=["'][^"']*posted-on[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  const date = dateMatch ? cleanText(dateMatch[1]) : '';

  const authorMatch = articleHtml.match(/<span[^>]*class=["'][^"']*author[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  const author = authorMatch ? cleanText(authorMatch[1]) : '';

  const catMatch = articleHtml.match(/<span[^>]*class=["'][^"']*cat-links[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  const category = catMatch ? cleanText(catMatch[1]) : '';

  // Entry content
  const entryMatch = articleHtml.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                     articleHtml.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
  const entryHtml = entryMatch ? entryMatch[1] : '';

  const paragraphs = [...entryHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => cleanText(m[1]))
    .filter(p => p.length > 0);

  console.log('Title:', title);
  console.log('Date:', date);
  console.log('Author:', author);
  console.log('Category:', category);
  console.log('Paragraphs count:', paragraphs.length);
  paragraphs.forEach((p, idx) => {
    console.log(`[P${idx + 1}] ${p}`);
  });
});
