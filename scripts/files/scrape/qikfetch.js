// This script will fetch translations from quranenc.com

var fs = require('fs');


var { firefox } = require('playwright');



var chaplength = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6]



async function test(){

  var browser = await firefox.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

var fullarr=[]


await page.goto('http://quraninkannada.com/surahs-101-114/',{timoeout:160000})

var links = await page.evaluate(() => {
  linkarr = Array.from(document.getElementsByTagName('a'))
     return linkarr.map(e=>e.href+"").slice(28).filter(elem => !/^\s*$/.test(elem))
});
console.log("links ",links)



for(var link of links){
//link = links[0]
  await page.goto(link,{timoeout:160000})
  var valarr = await page.evaluate(() => {
    textarr = Array.from(document.getElementsByTagName('h3'))
       return textarr.map(e=>e.textContent).slice(1)
  });
fullarr = fullarr.concat(valarr)
}


fs.appendFileSync('kid.txt','\n'+fullarr.join('\n'))






  await browser.close();

}

test()
