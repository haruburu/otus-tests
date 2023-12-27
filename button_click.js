const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser',headless: true});
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5000/');
    await page.click('body > div:nth-child(3) > div.make-todo > form > input[type=submit]:nth-child(2)');
    await page.waitFor(1000);

    browser.close();
    return result;
}

scrape().then((value) => {
    console.log(value);
});