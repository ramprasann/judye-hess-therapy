const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: Mobile 390x844 (standard iPhone viewport)
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  // Click hamburger button
  const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600)); // wait for drawer animation

    const outMobile = path.join(outDir, 'mobile_menu_open_390.png');
    await page.screenshot({ path: outMobile });
    console.log(`Saved open mobile menu screenshot to ${outMobile}`);
  } else {
    console.error('Menu button not found!');
  }

  // Test 2: Tablet 768x1024
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  const tabletMenuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (tabletMenuBtn) {
    await tabletMenuBtn.click();
    await new Promise(r => setTimeout(r, 600));

    const outTablet = path.join(outDir, 'mobile_menu_open_768.png');
    await page.screenshot({ path: outTablet });
    console.log(`Saved open tablet menu screenshot to ${outTablet}`);
  }

  await browser.close();
  console.log('Mobile menu audit finished successfully.');
})();
