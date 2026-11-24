const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd';

async function inspect() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Inspect Localhost Home
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  const localShot = path.join(ARTIFACT_DIR, 'localhost_home_fullpage.png');
  await page.screenshot({ path: localShot, fullPage: true });

  const localStyles = await page.evaluate(() => {
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const heroSec = document.querySelector('section');
    const header = document.querySelector('header');
    return {
      bodyBg: window.getComputedStyle(body).backgroundColor,
      bodyFont: window.getComputedStyle(body).fontFamily,
      h1Font: h1 ? window.getComputedStyle(h1).fontFamily : null,
      h1Size: h1 ? window.getComputedStyle(h1).fontSize : null,
      h1Color: h1 ? window.getComputedStyle(h1).color : null,
      heroPaddingTop: heroSec ? window.getComputedStyle(heroSec).paddingTop : null,
      headerHeight: header ? window.getComputedStyle(header).height : null,
    };
  });

  // 2. Inspect Stitch Screen file
  const stitchFilePath = 'file:///' + path.resolve(__dirname, 'stitch_screens', 'home.html').replace(/\\/g, '/');
  await page.goto(stitchFilePath, { waitUntil: 'networkidle0' });
  const stitchShot = path.join(ARTIFACT_DIR, 'stitch_home_fullpage.png');
  await page.screenshot({ path: stitchShot, fullPage: true });

  const stitchStyles = await page.evaluate(() => {
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const heroSec = document.querySelector('section');
    const header = document.querySelector('header');
    return {
      bodyBg: window.getComputedStyle(body).backgroundColor,
      bodyFont: window.getComputedStyle(body).fontFamily,
      h1Font: h1 ? window.getComputedStyle(h1).fontFamily : null,
      h1Size: h1 ? window.getComputedStyle(h1).fontSize : null,
      h1Color: h1 ? window.getComputedStyle(h1).color : null,
      heroPaddingTop: heroSec ? window.getComputedStyle(heroSec).paddingTop : null,
      headerHeight: header ? window.getComputedStyle(header).height : null,
    };
  });

  console.log('Localhost Styles:', JSON.stringify(localStyles, null, 2));
  console.log('Stitch Styles:', JSON.stringify(stitchStyles, null, 2));

  await browser.close();
}

inspect().catch(console.error);
