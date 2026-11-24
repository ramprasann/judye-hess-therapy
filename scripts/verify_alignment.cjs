const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const OUT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'my-practice', path: '/my-practice' },
  { name: 'about-me', path: '/about-me' },
  { name: 'qualifications', path: '/my-qualifications' },
  { name: 'publications', path: '/publications' },
  { name: 'family-therapy', path: '/family-therapy' },
  { name: 'couples-therapy', path: '/couples-therapy' },
  { name: 'group-therapy', path: '/group-therapy' },
  { name: 'blog', path: '/blog' },
  { name: 'contact-location', path: '/contact-location' }
];

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const results = [];

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route.path}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Measure alignment
    const metrics = await page.evaluate(() => {
      // Logo in navbar
      const logoEl = document.querySelector('nav a[href="/"]');
      const logoRect = logoEl ? logoEl.getBoundingClientRect() : null;

      // Contact CTA in navbar
      const ctaEl = document.querySelector('nav a[href="/contact-location"]');
      const ctaRect = ctaEl ? ctaEl.getBoundingClientRect() : null;

      // First main h1 element
      const h1El = document.querySelector('main h1');
      const h1Rect = h1El ? h1El.getBoundingClientRect() : null;

      // The section container wrapping the content
      const containerEl = document.querySelector('main section div[class*="xl:px-24"]');
      const containerRect = containerEl ? containerEl.getBoundingClientRect() : null;

      // Measure the rightmost element in the first section grid (e.g. image, card, or sidebar)
      const firstSection = document.querySelector('main section');
      const allSectionEls = firstSection ? Array.from(firstSection.querySelectorAll('*')) : [];
      let maxRight = 0;
      allSectionEls.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > maxRight && r.right <= window.innerWidth) {
          maxRight = r.right;
        }
      });

      return {
        logoLeft: logoRect ? Math.round(logoRect.left) : null,
        ctaRight: ctaRect ? Math.round(window.innerWidth - ctaRect.right) : null,
        h1Left: h1Rect ? Math.round(h1Rect.left) : null,
        containerPaddingLeft: containerEl ? parseInt(window.getComputedStyle(containerEl).paddingLeft) : null,
        containerPaddingRight: containerEl ? parseInt(window.getComputedStyle(containerEl).paddingRight) : null,
        sectionMaxRightFromEdge: Math.round(window.innerWidth - maxRight)
      };
    });

    // Capture screenshot of the top viewport
    const screenshotPath = path.join(OUT_DIR, `aligned_${route.name}.png`);
    await page.screenshot({ path: screenshotPath });

    results.push({
      route: route.name,
      path: route.path,
      ...metrics,
      screenshot: screenshotPath
    });
  }

  await browser.close();

  console.log(JSON.stringify(results, null, 2));
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
