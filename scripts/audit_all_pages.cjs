const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pagesToTest = [
  { name: 'publications', path: '/publications' },
  { name: 'family_therapy', path: '/family-therapy' },
  { name: 'couples_therapy', path: '/couples-therapy' },
  { name: 'group_therapy', path: '/group-therapy' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' },
  { name: 'about_me', path: '/about-me' },
  { name: 'qualifications', path: '/my-qualifications' }
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of pagesToTest) {
    const url = 'http://localhost:3000' + p.path;
    console.log(`Navigating to ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise(r => setTimeout(r, 600));

      const outPath = path.join(outDir, `page_${p.name}_desktop.png`);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`Saved screenshot to ${outPath}`);
    } catch (e) {
      console.error(`Error on ${p.name}:`, e.message);
    }
  }

  // Also take mobile screenshots
  await page.setViewport({ width: 390, height: 844 });
  for (const p of [pagesToTest[0], pagesToTest[2], pagesToTest[5]]) {
    const url = 'http://localhost:3000' + p.path;
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise(r => setTimeout(r, 500));
      const outPath = path.join(outDir, `page_${p.name}_mobile_390.png`);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`Saved mobile screenshot to ${outPath}`);
    } catch (e) {
      console.error(`Error on mobile ${p.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('All audits completed successfully!');
})();
