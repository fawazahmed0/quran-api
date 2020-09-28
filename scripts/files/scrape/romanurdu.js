// fetching from https://quranromanurdu.com
// one verse less have to seee
fs = require('fs')


var { chromium } = require('playwright');

(async () => {

  arrval = []
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

var url = "https://quranromanurdu.com/chapter/"
//const preloadFile = fs.readFileSync('jquery.js', 'utf8');
//await page.addInitScript(preloadFile);

for(a=1;a<=114;a++){



await page.goto(url+a).catch(async error =>
{
console.error(error)
await page.goto(url+a).catch(async error =>{await page.goto(url+a)})

})



// await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.5.1.min.js'})

value =  await page.evaluate(() => {

  pelem = document.getElementsByTagName('p')
  var arr = []
  for(i=0;i<pelem.length;i++){


  if(/^[0-9]{1,3}/.test(pelem[i].textContent.trim())){
// .replace(/^[0-9]{1,3}./,"")
  arr.push(pelem[i].textContent.trim().replace(/\n/g," ").replace(/\.$/,"").trim())


  }
}
 return arr;

});

arrval = arrval.concat(value)
}

fs.writeFile("./test/quranromanurdu",arrval.join('\n'),error=>console.error(error))

  await browser.close();
})().catch(console.error);
