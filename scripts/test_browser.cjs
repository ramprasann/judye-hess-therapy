const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\screenshots';

const routes = [
  { name: 'home', path: '/' },
  { name: 'my-practice', path: '/my-practice' },
  { name: 'about-me', path: '/about-me' },
  { name: 'qualifications', path: '/my-qualifications' },
  { name: 'publications', path: '/publications' },
  { name: 'family-therapy', path: '/family-therapy' },
  { name: 'couples-therapy', path: '/couples-therapy' },
  { name: 'group-therapy', path: '/group-therapy' },
  { name: 'blog', path: '/blog' },
  { name: 'blog-less-is-more', path: '/less-is-more' },
  { name: 'blog-walking-the-tightrope', path: '/walking-the-tightrope-of-intimacy' },
  { name: 'blog-dual-dwelling-duos', path: '/dual-dwelling-duos' },
  { name: 'blog-got-questions', path: '/got-questions' },
  { name: 'contact-location', path: '/contact-location' },
];

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'mobile-390', width: 390, height: 844 }
];

async function runTests() {
  const screenshotDir = path.join(__dirname, '..', 'tests', 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
  if (!fs.existsSync(ARTIFACT_DIR)) fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

  console.log('Launching headless Chrome for verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ url: page.url(), text: msg.text() });
    }
  });

  page.on('requestfailed', request => {
    failedRequests.push({ url: request.url(), error: request.failure()?.errorText });
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      failedRequests.push({ url: response.url(), status: response.status() });
    }
  });

  const report = [];

  for (const r of routes) {
    const pageUrl = `http://localhost:3000${r.path}`;
    console.log(`\nTesting Route: ${r.name} (${pageUrl})`);
    
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 15000 });

      // Check title
      const title = await page.title();
      
      // Check images loaded
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
      });

      // Capture screenshot
      const shotName = `${r.name}_${vp.name}.png`;
      const shotPath = path.join(screenshotDir, shotName);
      await page.screenshot({ path: shotPath, fullPage: false });
      
      // Copy to artifact directory
      fs.copyFileSync(shotPath, path.join(ARTIFACT_DIR, shotName));

      console.log(`  [${vp.name}] OK - Screenshot: ${shotName} (Broken imgs: ${brokenImages.length})`);

      report.push({
        route: r.name,
        path: r.path,
        viewport: vp.name,
        title,
        brokenImages,
        screenshot: shotPath
      });
    }
  }

  // Test form interaction on contact page
  console.log('\nTesting Contact Form Submission...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/contact-location', { waitUntil: 'networkidle0' });

  // Check if #fullName exists (custom Contact form) or #name (fallback ContactForm)
  const hasFullName = await page.$('#fullName');
  if (hasFullName) {
    await page.type('#fullName', 'Eleanor Vance');
    await page.type('#emailAddr', 'eleanor.vance@example.com');
    await page.type('#phoneNum', '(510) 555-0199');
    await page.type('#clientMessage', 'Hello Dr. Hess, I would like to schedule an initial consultation.');
    const consent = await page.$('#privacyConsent');
    if (consent) await consent.click();
  } else {
    await page.type('#name', 'Eleanor Vance');
    await page.type('#email', 'eleanor.vance@example.com');
    await page.type('#phone', '(510) 555-0199');
    await page.type('#message', 'Hello Dr. Hess, I would like to schedule an initial consultation.');
  }

  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 1200));

  const successMessage = await page.evaluate(() => {
    return document.body.innerText.includes('Thank You for Reaching Out');
  });

  const formShot = path.join(screenshotDir, 'contact_form_submitted.png');
  await page.screenshot({ path: formShot, fullPage: false });
  fs.copyFileSync(formShot, path.join(ARTIFACT_DIR, 'contact_form_submitted.png'));
  console.log(`Form submission test result: ${successMessage ? 'PASSED' : 'FAILED'}`);

  await browser.close();

  const finalSummary = {
    totalTests: report.length,
    consoleErrors,
    failedRequests,
    formSubmissionPassed: successMessage,
    results: report
  };

  fs.writeFileSync(path.join(__dirname, '..', 'tests', 'test_results.json'), JSON.stringify(finalSummary, null, 2), 'utf-8');
  console.log('\n=== BROWSER TESTING COMPLETE ===');
  console.log(`Total Route/Viewport Combinations Tested: ${report.length}`);
  console.log(`Console Errors: ${consoleErrors.length}`);
  console.log(`Failed Requests: ${failedRequests.length}`);
  console.log(`Form Submission Verified: ${successMessage ? 'YES' : 'NO'}`);
}

runTests().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
