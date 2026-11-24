const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd';

async function verifyHeader() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  // Screenshot header bar specifically
  const headerElem = await page.$('nav');
  if (headerElem) {
    await headerElem.screenshot({ path: path.join(ARTIFACT_DIR, 'updated_navbar.png') });
  }

  // Full page screenshot
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'localhost_updated_home.png'), fullPage: false });

  const metrics = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const inner = nav ? nav.firstElementChild : null;
    const logo = nav ? nav.querySelector('a') : null;
    const cta = nav ? nav.querySelector('a[href*="contact"]') : null;
    
    return {
      navHeight: nav ? window.getComputedStyle(nav).height : null,
      navPosition: nav ? window.getComputedStyle(nav).position : null,
      innerPadding: inner ? window.getComputedStyle(inner).padding : null,
      innerWidth: inner ? window.getComputedStyle(inner).width : null,
      logoLeft: logo ? logo.getBoundingClientRect().left : null,
      ctaRight: cta ? 1440 - cta.getBoundingClientRect().right : null,
    };
  });

  console.log('Updated Navbar Metrics:', JSON.stringify(metrics, null, 2));

  await browser.close();
}

verifyHeader().catch(console.error);
