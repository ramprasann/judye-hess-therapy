const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const parsed = urlModule.parse(fileUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(destPath);
    client.get(fileUrl, {
      headers: {
        'User-Agent': USER_AGENT,
        'Referer': 'https://judyehess.com/'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = urlModule.resolve(fileUrl, res.headers.location);
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve(downloadFile(redirectUrl, destPath));
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve({ success: false, url: fileUrl, status: res.statusCode });
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(destPath);
        resolve({ success: true, url: fileUrl, size: stats.size, destPath });
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      resolve({ success: false, url: fileUrl, error: err.message });
    });
  });
}

const assets = [
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/10/Berkeley-Relationship-Therapy-Judye-Hess-PhD.png', dest: 'public/images/general/logo.png', category: 'general' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/10/01.jpg', dest: 'public/images/therapist/judye-hess-hero.jpg', category: 'therapist' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/11/About-Judye-Hess-PhD-Berkeley-couples-counseling.jpg', dest: 'public/images/therapist/judye-hess-about.jpg', category: 'therapist' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/11/theravive-therapy-seal.jpg', dest: 'public/images/general/theravive-seal.jpg', category: 'general' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/11/facebook.png', dest: 'public/images/general/facebook.png', category: 'general' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2020/11/linkedin.png', dest: 'public/images/general/linkedin.png', category: 'general' },
  { url: 'https://judyehess.com/wp-content/uploads/2026/10/9173BHi5cnL._SL1500_-201x300.jpg', dest: 'public/images/books/core-focused-family-therapy.jpg', category: 'books' },
  { url: 'https://lh3.googleusercontent.com/a/ACg8ocJwC3GOshSI6ii-1_iNnaGJzOedWiRln_rRqOq1amHFvNKBOw=w40-h40-c-rp-mo-ba12-br100', dest: 'public/images/testimonials/reviewer-1.png', category: 'testimonials' },
  { url: 'https://lh3.googleusercontent.com/a/ACg8ocJGuPJNzw0wTvhgXvcD9K9sroaFaWH423v307fNvBpn009wBA=w40-h40-c-rp-mo-br100', dest: 'public/images/testimonials/reviewer-2.png', category: 'testimonials' },
  { url: 'https://lh3.googleusercontent.com/a/ACg8ocJUCSzoD7GbEbBfTY4FZfDSF3OdfbzLiqs5W3lCcOIvvKtNHw=w40-h40-c-rp-mo-br100', dest: 'public/images/testimonials/reviewer-3.png', category: 'testimonials' },
  { url: 'https://lh3.googleusercontent.com/a-/ALV-UjXcDa39iOt8qQdiCKE7Qcw6KwQoqZfTYH2Utno4Eyiu25Dy4qnk=w40-h40-c-rp-mo-br100', dest: 'public/images/testimonials/reviewer-4.png', category: 'testimonials' },
  // PDFs
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2021/09/SpeakingfromtheHeart.pdf', dest: 'public/publications/SpeakingfromtheHeart.pdf', category: 'publications' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2021/09/Duos-Hess.pdf', dest: 'public/publications/Duos-Hess.pdf', category: 'publications' },
  { url: 'https://judyehess-com.us.stackstaging.com/wp-content/uploads/2012/08/closeness.pdf', dest: 'public/publications/closeness.pdf', category: 'publications' },
];

async function run() {
  const results = [];
  for (const a of assets) {
    const fullPath = path.join(__dirname, '..', a.dest);
    console.log(`Downloading ${a.url} -> ${a.dest}`);
    const res = await downloadFile(a.url, fullPath);
    results.push({ ...a, ...res });
  }

  fs.writeFileSync(path.join(__dirname, 'download_results.json'), JSON.stringify(results, null, 2), 'utf-8');
  console.log('\n--- DOWNLOAD SUMMARY ---');
  results.forEach(r => {
    if (r.success) {
      console.log(`[SUCCESS] ${r.dest} (${r.size} bytes)`);
    } else {
      console.log(`[FAILED] ${r.url} - Error: ${r.error || r.status}`);
    }
  });
}

run();
