const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop 1440 full page
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/my-practice', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\my_practice_desktop_full.png',
    fullPage: true
  });

  const sections = await page.$$('section');
  for (let i = 0; i < sections.length; i++) {
    await sections[i].screenshot({
      path: `C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\my_practice_sec_${i + 1}.png`
    });
  }

  // Tablet 768
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:3000/my-practice', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\my_practice_tablet_768.png',
    fullPage: true
  });

  // Mobile 390
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/my-practice', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\my_practice_mobile_390.png',
    fullPage: true
  });

  await browser.close();
  console.log('My Practice screenshots captured successfully.');
})();
