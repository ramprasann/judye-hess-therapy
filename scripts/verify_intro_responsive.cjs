const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'tablet-1024', width: 1024, height: 800 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // Scroll intro into view
    await page.evaluate(() => {
      const el = document.getElementById('introduction');
      if (el) el.scrollIntoView();
    });

    // Wait a brief moment for any layout / animation
    await new Promise(r => setTimeout(r, 400));

    // Capture screenshot of viewport displaying introduction
    await page.screenshot({
      path: `C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots\\intro_viewport_${vp.name}.png`
    });
    console.log(`Captured intro_viewport_${vp.name}.png`);
  }

  await browser.close();
  console.log('Done.');
})();
