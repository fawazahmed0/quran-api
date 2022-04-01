const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path')


async function test(){

    let browser = await chromium.launch({ headless: true});
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.quran-online.com/quran-phonetic/',{timeout:60000});

    let links = await page.evaluate(() => Array.from(document.querySelectorAll('a[href*="quran-phonetic"]')).map(e=>e.href).slice(2))
    let bigverses = []

    for(let link of links){
        await page.goto(link,{timeout:60000});
      let verses =   await page.evaluate(() =>Array.from(document.querySelectorAll('.texte_verset')).map(e=>e.textContent.replace(/\s\s+/g,' ').trim()))
        bigverses = bigverses.concat(verses)
      
    }
    fs.writeFileSync(path.join(__dirname,'phonetics.txt'),bigverses.join('\n').trim())
    await browser.close()
    

}
test()
