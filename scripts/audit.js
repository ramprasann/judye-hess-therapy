const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

function fetchPage(pageUrl) {
  return new Promise((resolve, reject) => {
    const parsed = urlModule.parse(pageUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const options = {
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.path,
      method: 'GET',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    };

    client.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = urlModule.resolve(pageUrl, res.headers.location);
        console.log(`Redirecting from ${pageUrl} to ${redirectUrl}`);
        return resolve(fetchPage(redirectUrl));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data, url: pageUrl }));
    }).on('error', reject);
  });
}

function cleanHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
}

function extractInfo(html, currentUrl) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';

  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  const ogImage = ogImageMatch ? ogImageMatch[1].trim() : '';

  // Extract all links
  const linkMatches = [...html.matchAll(/<a\b[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gis)];
  const links = [];
  for (const m of linkMatches) {
    const href = m[1].trim();
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) continue;
    try {
      const resolved = urlModule.resolve(currentUrl, href);
      links.push({ href: resolved, rawHref: href, text });
    } catch (e) {}
  }

  // Extract all images
  const imgMatches = [...html.matchAll(/<img\b([^>]*)>/gi)];
  const images = [];
  for (const m of imgMatches) {
    const attrs = m[1];
    const srcMatch = attrs.match(/src=["']([^"']*)["']/i);
    const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
    const classMatch = attrs.match(/class=["']([^"']*)["']/i);
    if (srcMatch && srcMatch[1]) {
      try {
        const resolved = urlModule.resolve(currentUrl, srcMatch[1].trim());
        images.push({
          src: resolved,
          alt: altMatch ? altMatch[1].trim() : '',
          class: classMatch ? classMatch[1].trim() : '',
        });
      } catch (e) {}
    }
  }

  // Extract headings
  const headingMatches = [...html.matchAll(/<(h[1-6])\b[^>]*>(.*?)<\/\1>/gis)];
  const headings = headingMatches.map(m => ({
    level: m[1].toLowerCase(),
    text: m[2].replace(/<[^>]+>/g, '').trim()
  })).filter(h => h.text.length > 0);

  return { title, metaDesc, ogImage, links, images, headings };
}

async function run() {
  const auditDir = path.join(__dirname, 'audit_raw');
  if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir, { recursive: true });

  const startUrls = [
    'https://judyehess.com/',
    'https://judyehess.com/my-practice/',
    'https://judyehess.com/about-me/',
    'https://judyehess.com/my-qualifications/',
    'https://judyehess.com/publications/',
    'https://judyehess.com/family-therapy/',
    'https://judyehess.com/couples-therapy/',
    'https://judyehess.com/group-therapy/',
    'https://judyehess.com/blog/',
    'https://judyehess.com/contact-and-location/',
    'https://judyehess.com/contact/'
  ];

  const visited = new Set();
  const queue = [...startUrls];
  const allPages = {};
  const allImages = new Set();
  const allExternalLinks = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    const cleanUrl = current.split('#')[0].replace(/\/$/, '') + '/';
    if (visited.has(cleanUrl)) continue;
    visited.add(cleanUrl);

    console.log(`Auditing: ${cleanUrl}`);
    try {
      const res = await fetchPage(cleanUrl);
      if (res.status !== 200) {
        console.log(`Status ${res.status} for ${cleanUrl}`);
        allPages[cleanUrl] = { error: `Status ${res.status}` };
        continue;
      }

      const slug = cleanUrl.replace('https://judyehess.com', '').replace(/^\/|\/$/g, '') || 'home';
      const safeFilename = slug.replace(/[^a-zA-Z0-9_-]/g, '_') + '.html';
      fs.writeFileSync(path.join(auditDir, safeFilename), res.body, 'utf-8');

      const info = extractInfo(res.body, cleanUrl);
      allPages[cleanUrl] = {
        url: cleanUrl,
        slug,
        title: info.title,
        metaDesc: info.metaDesc,
        ogImage: info.ogImage,
        headings: info.headings,
        images: info.images,
        links: info.links
      };

      for (const img of info.images) {
        allImages.add(img.src);
      }

      for (const l of info.links) {
        if (l.href.includes('judyehess.com')) {
          const lClean = l.href.split('#')[0].replace(/\/$/, '') + '/';
          // Avoid wp-admin, wp-content, feed, category duplicate, etc. if not needed, but keep blog posts!
          if (!lClean.includes('/wp-admin') && !lClean.includes('/feed/') && !lClean.includes('?') && !visited.has(lClean)) {
            queue.push(lClean);
          }
        } else {
          allExternalLinks.add(l.href);
        }
      }
    } catch (e) {
      console.log(`Error fetching ${cleanUrl}:`, e.message);
      allPages[cleanUrl] = { error: e.message };
    }
  }

  fs.writeFileSync(path.join(auditDir, 'audit_summary.json'), JSON.stringify({
    totalPages: Object.keys(allPages).length,
    pages: allPages,
    images: [...allImages],
    externalLinks: [...allExternalLinks]
  }, null, 2), 'utf-8');

  console.log(`Audit complete! Visited ${Object.keys(allPages).length} pages. Found ${allImages.size} unique images.`);
}

run();
