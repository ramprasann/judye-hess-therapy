const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const OUT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'mobile-390', width: 390, height: 844 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Scroll to testimonials
    await page.evaluate(() => {
      const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Trusted by Couples'));
      if (heading) {
        heading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });

    await new Promise(r => setTimeout(r, 400));

    const shotPath = path.join(OUT_DIR, `testimonials_${vp.name}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`Saved screenshot: ${shotPath}`);
  }

  // Also test clicking "Read more" to expand on desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Trusted by Couples'));
    if (heading) {
      heading.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });

  // Click first "Read more" button
  const readMoreBtn = await page.$('article button');
  if (readMoreBtn) {
    await readMoreBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const expandedPath = path.join(OUT_DIR, 'testimonials_desktop-1440_expanded.png');
    await page.screenshot({ path: expandedPath });
    console.log(`Saved expanded screenshot: ${expandedPath}`);
  }

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
