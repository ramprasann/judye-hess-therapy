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

const parsedBlogs = [];

blogs.forEach(b => {
  const html = fs.readFileSync(path.join(dir, b.file), 'utf-8');
  
  // Extract schema graph
  const schemaMatch = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i);
  let schema = null;
  if (schemaMatch) {
    try { schema = JSON.parse(schemaMatch[1]); } catch (e) {}
  }
  
  const articleSchema = schema && schema['@graph'] ? schema['@graph'].find(item => item['@type'] === 'Article') : null;
  const headline = articleSchema ? articleSchema.headline : (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const datePublished = articleSchema ? articleSchema.datePublished : '';
  const dateModified = articleSchema ? articleSchema.dateModified : '';
  const category = articleSchema && articleSchema.articleSection ? articleSchema.articleSection.join(', ') : 'Couples Therapy';
  
  // Extract post content: between the post title and the footer / comment section
  // Let's find fl-content or fl-post-content
  const postContentMatch = html.match(/<div[^>]*class=["'][^"']*fl-post-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<!-- \.fl-post-content -->/i) ||
                           html.match(/<div[^>]*class=["'][^"']*fl-module-rich-text[^"']*["'][\s\S]*?<div class="fl-module-content[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i);
  
  // Let's also look for all p.wp-block-paragraph, blockquote, etc.
  const contentStart = html.indexOf('<div class="fl-post-content');
  const contentEnd = html.indexOf('fl-post-nav', contentStart !== -1 ? contentStart : 0) !== -1 ?
                     html.indexOf('fl-post-nav', contentStart) :
                     html.indexOf('Contact Me For A Free Consultation', contentStart);
  
  const contentSlice = contentStart !== -1 && contentEnd !== -1 ? html.slice(contentStart, contentEnd) : html;
  
  const elements = [...contentSlice.matchAll(/<(p|blockquote|h[1-6]|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
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
      return e.text.length > 0 &&
             !e.text.includes('Posted by') &&
             !e.text.includes('Contact Me For A Free Consultation') &&
             !e.text.includes('Search for:');
    });

  parsedBlogs.push({
    slug: b.slug,
    title: cleanText(headline),
    datePublished,
    dateModified,
    category,
    elements
  });
});

fs.writeFileSync(path.join(__dirname, 'parsed_blogs.json'), JSON.stringify(parsedBlogs, null, 2), 'utf-8');
console.log('Parsed all 4 blogs:');
parsedBlogs.forEach(pb => {
  console.log(`\nBlog: "${pb.title}" (${pb.slug})`);
  console.log(`Date: ${pb.datePublished} | Category: ${pb.category}`);
  console.log(`Elements: ${pb.elements.length}`);
  console.log('Sample element 1:', pb.elements[0]);
  console.log('Sample element 2:', pb.elements[1]);
});
