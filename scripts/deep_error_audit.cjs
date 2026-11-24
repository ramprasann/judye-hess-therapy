const puppeteer = require('puppeteer-core');

const routes = [
  '/',
  '/my-practice',
  '/about-me',
  '/my-qualifications',
  '/publications',
  '/family-therapy',
  '/couples-therapy',
  '/group-therapy',
  '/blog',
  '/contact-location',
  '/less-is-more'
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const issues = [];

  page.on('pageerror', error => {
    issues.push({ type: 'PAGE_ERROR', message: error.message, stack: error.stack });
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      issues.push({ type: 'CONSOLE_ERROR', text: msg.text() });
    }
  });

  page.on('requestfailed', request => {
    const url = request.url();
    // Ignore external or analytics failures if any
    if (url.includes('localhost:3000')) {
      issues.push({ type: 'REQUEST_FAILED', url, errorText: request.failure()?.errorText });
    }
  });

  console.log('--- Starting Route-by-Route Deep Error Audit ---');

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      const status = response ? response.status() : 'NO_RESPONSE';
      console.log(`[PASS] Route: ${route} - HTTP Status: ${status}`);

      // Basic DOM integrity check
      const mainContent = await page.$('main');
      if (!mainContent) {
        issues.push({ type: 'DOM_INTEGRITY', route, message: 'Missing <main> tag' });
      }
    } catch (e) {
      issues.push({ type: 'NAVIGATION_ERROR', route, message: e.message });
      console.error(`[FAIL] Route: ${route} - Error: ${e.message}`);
    }
  }

  // Interaction Test: Mobile Navigation Menu
  console.log('--- Testing Mobile Drawer Interaction ---');
  try {
    await page.setViewport({ width: 390, height: 844 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    const openBtn = await page.$('button[aria-label="Open navigation menu"]');
    if (openBtn) {
      await openBtn.click();
      await new Promise(r => setTimeout(r, 400));
      const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
      if (closeBtn) {
        await closeBtn.click();
        await new Promise(r => setTimeout(r, 400));
        console.log('[PASS] Mobile drawer opened and closed without errors');
      } else {
        issues.push({ type: 'INTERACTION_ERROR', message: 'Close button not found in drawer' });
      }
    } else {
      issues.push({ type: 'INTERACTION_ERROR', message: 'Open menu button not found' });
    }
  } catch (e) {
    issues.push({ type: 'INTERACTION_ERROR', message: e.message });
  }

  // Interaction Test: FAQ Accordion on Contact Page
  console.log('--- Testing FAQ Accordion Interaction ---');
  try {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/contact-location', { waitUntil: 'networkidle0' });
    const faqButtons = await page.$$('section button');
    if (faqButtons.length > 0) {
      await faqButtons[0].click();
      await new Promise(r => setTimeout(r, 200));
      console.log(`[PASS] FAQ accordion button clicked successfully`);
    }
  } catch (e) {
    issues.push({ type: 'FAQ_INTERACTION_ERROR', message: e.message });
  }

  await browser.close();

  console.log('\n========================================');
  console.log(`AUDIT FINISHED. Total Issues Detected: ${issues.length}`);
  console.log('========================================\n');

  if (issues.length > 0) {
    console.log(JSON.stringify(issues, null, 2));
    process.exit(1);
  } else {
    console.log('SUCCESS: Zero errors, zero page crashes, zero failed localhost requests across all routes!');
    process.exit(0);
  }
})();
