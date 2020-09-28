// fetched from http://www.quranraj.com/selectsurah.php



// fetching from https://quranromanurdu.com

fs = require('fs')

var gloflag = false

var { chromium } = require('playwright');

(async () => {

  arrval = []
  var browser = await chromium.launch({ headless: true });
  var context = await browser.newContext();
//  const context = await browser.newContext();
//  const page = await context.newPage();
var page = await context.newPage();
var url = "http://www.quranraj.com/selectsurah.php"


//const preloadFile = fs.readFileSync('jquery.js', 'utf8');
//await page.addInitScript(preloadFile);


fullurdu=[]
fullroman=[]

await page.goto(url).catch(async error =>
{
console.error(error)
await page.goto(url).catch(async error =>{await page.goto(url)})

})


var skip = false

for(var c=1;c<=114;c++){

/*
  var skip = false;
  await page.goto(url).catch(async error =>
  {


//  console.error(error)
//  await page.goto(url).catch(async error =>{})
skip=true;
c=c-1;


  })

if(skip)
   continue;
*/
 await page.selectOption('#surahAll', c+'')
 //await page.uncheck('#arabic');
  //await page.uncheck('#english');
skip = await scrollFullPageedit(page).catch(()=>true)

if(skip){
  c=c-1;
  await page.goto(url).catch(async error =>
  {
  console.error(error)
  await page.goto(url).catch(async error =>{await page.goto(url)})

  })
  skip=false;
  continue;


}






// await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.5.1.min.js'})

urduarr =   await page.evaluate(() => {
var uarr = [];
var urdu = document.querySelectorAll('.urduHurf.everow')

for (i=1;i<urdu.length;i++){
uarr.push(urdu[i].textContent.replace(/\n/g," ").trim())

}
return uarr

});

romanarr =   await page.evaluate(() => {
var rarr = [];
var roman = document.querySelectorAll('.englishHurf.oddrow')
//arr.push(a[0].textContent.trim().replace(/^[0-9]{1,3}\.[0-9]{1,3}\./,"").replace(/\n/g," ").replace(/\.$/,"").trim())
//(/^[0-9]{1,3}\.[0-9]{1,3}\./,"")
for (i=1;i<roman.length;i++){
  if(i%2==0)
rarr.push(roman[i].textContent.replace(/\n/g," ").trim().replace(/\.$/,"").trim())

}
return rarr

});

//fullurdu = fullurdu.concat(urduarr)
//fullroman = fullroman.concat(romanarr)
fs.appendFile("./fullurdu",urduarr.join('\n')+'\n',error=>console.error(error))
fs.appendFile("./fullroman",romanarr.join('\n')+'\n',error=>console.error(error))
//fullurdu = []
//fullroman = []
}
//await page.screenshot({ path: 'example.png',fullPage : true });

//arrval = arrval.concat(value)



  await browser.close();
})().catch(console.error);




// refer: https://github.com/microsoft/playwright/issues/620
async function scrollFullPageedit(page) {
return await page.evaluate(async () => {

    var chaplength = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6]
    var counter = 0

 await new Promise(resolve => {
   let totalHeight = 0;
   const distance = 100;

      var timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        counter++
        if(counter>2000){
          clearInterval(timer);
          resolve();


        }






hurfs = document.querySelectorAll('.englishHurf')
val = hurfs[hurfs.length-2].textContent.replace(/^[0-9]{1,3}\./,"").trim()
val = val.match(/^[0-9]{1,3}/)




// if(chaplength[document.getElementById("surahAll").selectedIndex] == (document.querySelectorAll('.englishHurf').length/2)-1){
if (val[0]==chaplength[document.getElementById("surahAll").selectedIndex]){
 clearInterval(timer);
resolve();
}

}, 100);
    });
if(counter>2000)
   return true;


  })
}
