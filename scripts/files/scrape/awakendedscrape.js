// Scraps verses from https://www.islamawakened.com/quran/
var fs = require('fs');
var chaplength = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6]

var mappings = []

for(i=1;i<=114;i++)
{

for(j=1;j<=chaplength[i-1];j++){
  mappings.push([i,j])
}

}

var { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({acceptDownloads:true});
  const context = await browser.newContext();
  const page = await context.newPage();
  // Trimming first n
mappings.splice(0,6065)
  for (num of mappings){

  await page.goto('https://www.islamawakened.com/quran/'+num[0]+'/'+num[1]).catch(async error =>
{
console.error(error)
await page.goto('https://www.islamawakened.com/quran/'+num[0]+'/'+num[1])

})

//  await page.screenshot({ path: `example.png` });
//  await page.click('data-test-id=foo')

// sectionText = await page.$eval('td', e => e.textContent);

 namesarr = await page.evaluate(() => {
  names = Array.from(document.querySelectorAll("td"))
  var namesarr = []
  namesarr.push(names[10].textContent)
  namesarr.push(names[14].textContent)
namesarr.push(names[18].textContent)
  for (i=24;i<names.length;i+=4){
  namesarr.push(names[i].textContent)

  }
  namesarr.splice(-2)
  return namesarr
});

textsarr = await page.evaluate(() => {
  var textarr = []

 var simple = document.querySelectorAll("td + td.nb")
 textarr.push(simple[0].textContent)
 textarr.push(simple[1].textContent)
 textarr.push(simple[2].textContent)

 var textstr = Array.from(document.querySelectorAll("td.nb + td"))
 for (i=3;i<textstr.length;i++){
 textarr.push(textstr[i].textContent)

 }
 textarr.splice(-1)
 return textarr
});
var count = 0
for (text of textsarr){
//fs.appendFileSync('./'+namesarr[count++].replace(/[^\w\s]|_/g, ""), text+'\n' )

fs.appendFile('G:\\test\\'+namesarr[count++].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]|_/g, ""), num[0]+'|'+num[1]+'| '+text+'\n', err => console.error());


}
}
  await browser.close();
})().catch(console.error);
