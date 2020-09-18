const {firefox} = require('playwright');

const fs = require('fs');
const path = require('path');
async function test(){
arr =   fs.readFileSync('LangsToAddinAPI.txt').toString().split(/\r?\n/)

  for(var val of arr){


    var browser = await firefox.launch({
      headless: false
    });
    var context = await browser.newContext();
    var page = await context.newPage();
    await page.goto('https://www.google.com/search?&q='+val+'+quran');


}

}
test()
