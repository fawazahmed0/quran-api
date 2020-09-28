
var fs = require('fs');


// use isArray to check array present ,if not then create aray inside object


// gotten from document.cookie
var cookieval = "currentLocale=en; _ga=GA1.2.1765534686.1592607519; _gid=GA1.2.2099140571.1593867757; options=%7B%22translations%22%3A%5B20%2C102%2C17%2C85%2C101%2C84%2C18%2C19%2C95%2C88%2C57%2C22%2C89%2C47%2C87%2C75%2C23%2C24%2C25%2C56%2C26%2C86%2C40%2C30%2C31%2C27%2C32%2C82%2C33%2C34%2C35%2C36%2C81%2C39%2C80%2C37%2C38%2C41%2C29%2C42%2C43%2C44%2C78%2C45%2C79%2C46%2C83%2C28%2C49%2C48%2C74%2C50%2C53%2C51%2C77%2C52%2C76%2C104%2C54%2C97%2C55%5D%2C%22isShowingSurahInfo%22%3Afalse%2C%22isReadingMode%22%3Afalse%2C%22isNightMode%22%3Afalse%7D; mp_d3f9b2f15c4bf0509e85845b56921034_mixpanel=%7B%22distinct_id%22%3A%20%22172dc461c18427-0ecdb172f19779-3e3e5f0e-140000-172dc461c1955c%22%2C%22%24device_id%22%3A%20%22172dc461c18427-0ecdb172f19779-3e3e5f0e-140000-172dc461c1955c%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24search_engine%22%3A%20%22google%22%7D; _gat=1"
var arr = [];
for (pair of cookieval.split(';')){
arr.push({name:pair.split('=')[0].trim(),value:pair.split('=')[1].trim(),url:'https://quran.com'})
}

var cobj = {name:'abc',value:'cde',url:'https://quran.com/'}
var { chromium } = require('playwright');



(async () => {


var myobj = {};

  const browser = await chromium.launch({acceptDownloads:true});

  const context = await browser.newContext();

   await context.addCookies(arr)


     const page = await context.newPage();

//     await page.addScriptTag({
//    path: 'jquery.js'
//  });

  await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.5.1.min.js'})

for(a=1;a<=114;a++){
  await page.goto("https://quran.com/"+a).catch(async error =>
  {
  console.error(error)
  await page.goto("https://quran.com/"+a).catch(async error =>{await page.goto("https://quran.com/"+a)})

  })

/*
// Scroll page to end
  await page.evaluate(() => {

    function getElementsByXPath(xpath, parent)
    {
        let results = [];
        let query = document.evaluate(xpath, parent || document,null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let i = 0, length = query.snapshotLength; i < length; ++i) {
            results.push(query.snapshotItem(i));
        }
        return results;
    }

    var inter = setInterval(test, 1000);
    function test(){
    window.scrollTo(0,document.body.scrollHeight);
    if(getElementsByXPath("//*[contains(text(),'Beginning of Surah')]").length){
     clearInterval(inter);
   }
    }

 });
 */
 await scrollFullPageedit(page)




   transname =  await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.montserrat')).map(x=>x.textContent)
  });

  transvalue =  await page.evaluate(() => {
 return Array.from(document.querySelectorAll('.text-left.text-translation.times-new')).map(x=>x.textContent.replace(/\n/g," ").trim())
 });







for(i=0;i<transvalue.length;i++){
  name = transname[i+1].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]|_/g, "").replace(/\n/g," ").toLowerCase().trim()

if(!Array.isArray(myobj[name]))
    myobj[name] = []

myobj[name].push(transvalue[i])
}


for ([key, value] of Object.entries(myobj)) {
  fs.appendFile("./output/"+key,value.join('\n')+'\n',error=>console.error())
}
// empty the object
myobj = {};
}
//await page.focus('input:checkbox');
//  await page.check('input:checkbox')

/*
var str=  await page.evaluate(() => {
    return document.cookie
});
*/







//    await page.screenshot({
//        path: 'example.png',
//        fullPage : true });





/*
await page.goto("https://www.google.com/search?q=tron")
await scrollFullPage(page);

await page.screenshot({
    path: 'example.png',
    fullPage : true });
*/
/*
  await page.goto('https://www.islamawakened.com/quran/'+num[0]+'/'+num[1]).catch(async error =>
{
console.error(error)
await page.goto('https://www.islamawakened.com/quran/'+num[0]+'/'+num[1])

})
*/
//  await page.screenshot({ path: `example.png` });
//  await page.click('data-test-id=foo')

//sectionText = await page.$eval('td', e => e.textContent);
/*
 jqtest = await page.evaluate(() => {
   var script = document.createElement('script');
   script.src = "jquery.js";
   document.getElementsByTagName('head')[0].appendChild(script);



});
*/




//fs.appendFile('G:\\test\\'+namesarr[count++].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]|_/g, ""), num[0]+'|'+num[1]+'| '+text+'\n', err => console.error());




  await browser.close();
})().catch(console.error);





// refer: https://github.com/microsoft/playwright/issues/620
async function scrollFullPageedit(page) {
  await page.evaluate(async () => {





    await new Promise(resolve => {

      function getElementsByXPath(xpath, parent)
      {
          let results = [];
          let query = document.evaluate(xpath, parent || document,null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
          for (let i = 0, length = query.snapshotLength; i < length; ++i) {
              results.push(query.snapshotItem(i));
          }
          return results;
      }


      const timer = setInterval(() => {
        window.scrollTo(0,document.body.scrollHeight)
if(getElementsByXPath("//*[contains(text(),'Beginning of Surah')]").length){
 clearInterval(timer);
resolve();
}


}, 1000);
    });
  });
}





// refer: https://github.com/microsoft/playwright/issues/620
async function scrollFullPage(page) {
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
