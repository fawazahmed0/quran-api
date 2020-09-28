// ref https://github.com/microsoft/playwright/issues/2839


fs = require('fs')


var { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();


//const preloadFile = fs.readFileSync('jquery.js', 'utf8');
//await page.addInitScript(preloadFile);

await page.goto("https://www.example.com/")
 await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.5.1.min.js'})

value =  await page.evaluate(() => window.jQuery ? 'yes' : 'no');
console.log(value)
  await browser.close();
})().catch(console.error);
