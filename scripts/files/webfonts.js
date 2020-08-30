var fs = require('fs');


var { firefox } = require('playwright');

var path = require('path');

async function test(){


// https://playwright.dev/#version=v1.3.0&path=docs%2Fapi.md&q=browsertypelaunchoptions
const browser = await firefox.launch({headless: false,downloadsPath:path.join(__dirname,'test')});
  const context = await browser.newContext({acceptDownloads:true});
  const page = await context.newPage();
  await page.goto('https://www.fontsquirrel.com/tools/webfont-generator');
  //https://github.com/microsoft/playwright/issues/2351
  await page.check('input[value="expert"]');

  await page.check('input[value="ttf"]');
  await page.check('input[value="svg"]');
    await page.check('input[value="eotz"]');
    await page.check('input[value="woff"]');
    await page.check('input[value="woff2"]');
await page.check('input[name="agreement"]');
await page.fill('input[name="filename_suffix"]', '');
  await page.setInputFiles('input[type="file"]', ['font1.ttf','font2.ttf']);

var uploadwaitTime = 300000  //300seconds

// dismiss all the dialogs that will popup due to font being webfont
// https://playwright.dev/#version=v1.3.0&path=docs%2Fapi.md&q=class-dialog
page.on('dialog', async dialog => {
  await dialog.dismiss();

});

// https://playwright.dev/#version=v1.3.0&path=docs%2Fnetwork.md&q=handle-file-downloads
 const [ download ] = await Promise.all([
 page.waitForEvent('download',{timeout:uploadwaitTime}), // wait for download to start
page.click('#ffgen_downloadbtn',{timeout:uploadwaitTime})
]);
// see if it prints two paths

var downloadedPath  = await download.path();
console.log("path is ",downloadedPath)
  await browser.close();
}
test()
