const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'audit_raw');

function cleanText(t) {
  if (!t) return '';
  return t
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
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

const blogs = [
  { file: 'less-is-more.html', slug: 'less-is-more' },
  { file: 'walking-the-tightrope-of-intimacy.html', slug: 'walking-the-tightrope-of-intimacy' },
  { file: 'dual-dwelling-duos.html', slug: 'dual-dwelling-duos' },
  { file: 'got-questions.html', slug: 'got-questions' }
];

const results = [];

blogs.forEach(b => {
  const html = fs.readFileSync(path.join(dir, b.file), 'utf-8');
  
  // Title
  const titleMatch = html.match(/<h1[^>]*class=["'][^"']*fl-post-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i) ||
                     html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  // Post info
  const dateMatch = html.match(/<span[^>]*class=["'][^"']*fl-post-info-date[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  const date = dateMatch ? cleanText(dateMatch[1]) : '';

  const catMatch = html.match(/<span[^>]*class=["'][^"']*fl-post-info-terms[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  const category = catMatch ? cleanText(catMatch[1]) : 'Couples Therapy';

  // Find module content
  const startIdx = html.indexOf('fl-module-fl-post-content');
  if (startIdx === -1) {
    console.log(`Could not find fl-module-fl-post-content in ${b.file}`);
    return;
  }
  
  const endModuleIdx = html.indexOf('class="fl-module ', startIdx + 30);
  const postHtml = endModuleIdx !== -1 ? html.slice(startIdx, endModuleIdx) : html.slice(startIdx);

  // Extract all paragraphs, blockquotes, lists, headings inside postHtml
  const elements = [...postHtml.matchAll(/<(p|blockquote|h[1-6]|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => {
      const tag = m[1].toLowerCase();
      if (tag === 'ul' || tag === 'ol') {
        const items = [...m[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(li => cleanText(li[1]));
        return { type: 'list', items };
      }
      return {
        type: tag === 'blockquote' ? 'quote' : (tag.startsWith('h') ? 'heading' : 'paragraph'),
        text: cleanText(m[2])
      };
    }).filter(e => {
      if (e.type === 'list') return e.items.length > 0;
      return e.text.length > 0;
    });

  results.push({
    slug: b.slug,
    title,
    date,
    category,
    content: elements
  });
});

console.log('--- EXTRACTED BLOG POSTS ---');
results.forEach(r => {
  console.log(`\nSlug: ${r.slug}`);
  console.log(`Title: ${r.title}`);
  console.log(`Date: ${r.date}`);
  console.log(`Category: ${r.category}`);
  console.log(`Elements (${r.content.length}):`);
  r.content.forEach((el, i) => {
    console.log(`  [${el.type.toUpperCase()}] ${el.text ? el.text.slice(0, 70) + '...' : JSON.stringify(el.items)}`);
  });
});

fs.writeFileSync(path.join(__dirname, 'full_blog_posts.json'), JSON.stringify(results, null, 2), 'utf-8');
