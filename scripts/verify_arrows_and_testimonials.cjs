const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const OUT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  // 1. Screenshot of the top navbar with Contact Me button
  const navBtn = await page.$('nav a[href="/contact-location"]');
  if (navBtn) {
    const navShot = path.join(OUT_DIR, 'nav_contact_no_arrow.png');
    await navBtn.screenshot({ path: navShot });
    console.log('Saved nav button screenshot');
  }

  // 2. Screenshot of the hero contact button
  const heroBtn = await page.$('a[href="#consultation"]');
  if (heroBtn) {
    const heroShot = path.join(OUT_DIR, 'hero_contact_no_arrow.png');
    await heroBtn.screenshot({ path: heroShot });
    console.log('Saved hero contact button screenshot');
  }

  // 3. Screenshot of the entire hero & navbar
  const topShot = path.join(OUT_DIR, 'home_top_no_arrows.png');
  await page.screenshot({ path: topShot });

  // 4. Screenshot of the updated compact testimonials with amber stars
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Trusted by Couples'));
    if (heading) {
      heading.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });
  await new Promise(r => setTimeout(r, 400));
  const testShot = path.join(OUT_DIR, 'testimonials_compact_amber_stars.png');
  await page.screenshot({ path: testShot });

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
