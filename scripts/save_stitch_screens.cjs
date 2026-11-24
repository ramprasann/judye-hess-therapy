const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Uxdlab\\.gemini\\antigravity\\brain\\e171a2a6-99cc-44c8-bdb8-0a1416fcb2fd\\.system_generated\\steps';
const outDir = path.join(__dirname, 'stitch_screens');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const stepMap = {
  '249': 'home.html',
  '253': 'my-practice.html',
  '254': 'about-me.html',
  '255': 'my-qualifications.html',
  '256': 'publications.html',
  '258': 'family-therapy.html',
  '259': 'couples-therapy.html',
  '260': 'blog.html',
  '261': 'less-is-more.html',
  '262': 'contact-location.html'
};

for (const [step, filename] of Object.entries(stepMap)) {
  const filePath = path.join(baseDir, step, 'output.txt');
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    try {
      const data = JSON.parse(raw);
      if (data.html) {
        fs.writeFileSync(path.join(outDir, filename), data.html, 'utf-8');
        console.log(`Saved ${filename} (${data.html.length} chars)`);
      }
    } catch (e) {
      console.error(`Error parsing step ${step}:`, e.message);
    }
  }
}
