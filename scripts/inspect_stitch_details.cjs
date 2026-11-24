const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'stitch_screens');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const html = fs.readFileSync(path.join(dir, f), 'utf-8');
  console.log(`\n================= SCREEN: ${f} =================`);
  
  // Extract main
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.log('No main tag found');
    return;
  }
  const main = mainMatch[1];
  
  // Find all sections or major divs
  const sections = [...main.matchAll(/<!--\s*(\d+\.\s*[^>]+?)\s*-->/gi)].map(m => m[1]);
  console.log('Sections identified by comments:', sections);

  // Extract h1, h2, h3
  const headings = [...main.matchAll(/<(h[1-4])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => {
    return `${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()}`;
  });
  console.log('Headings:', headings.slice(0, 10));

  // Extract any image src or data-alt
  const images = [...main.matchAll(/<img\b([^>]*)>/gi)].map(m => {
    const src = (m[1].match(/src=["']([^"']*)["']/i) || [])[1];
    const alt = (m[1].match(/(?:alt|data-alt)=["']([^"']*)["']/i) || [])[1];
    return { src: src ? src.slice(0, 50) : '', alt: alt ? alt.slice(0, 60) : '' };
  });
  console.log('Images in screen:', images);
});
