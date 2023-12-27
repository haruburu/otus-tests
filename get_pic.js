const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser',headless: true});
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5000/');
  await page.screenshot({path: 'test.png'});

  await browser.close();
}

getPic();