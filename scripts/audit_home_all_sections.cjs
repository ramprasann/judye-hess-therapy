const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  // Capture full page
  await page.screenshot({
    path: 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\home_full_page_audit.png',
    fullPage: true
  });

  // Capture individual sections to verify alignment & harmony
  const sections = await page.$$('section');
  console.log(`Found ${sections.length} sections on homepage.`);

  for (let i = 0; i < sections.length; i++) {
    await sections[i].screenshot({
      path: `C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\home_audit_sec_${i + 1}.png`
    });
    console.log(`Captured home_audit_sec_${i + 1}.png`);
  }

  await browser.close();
  console.log('Homepage full audit screenshots completed.');
})();
