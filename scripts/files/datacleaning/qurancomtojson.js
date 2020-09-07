
var fs = require('fs');
var path = require('path');

var { firefox } = require('playwright');



async function start() {


var myobj = {};

  const browser = await firefox.launch({acceptDownloads:true});

  const context = await browser.newContext();




     const page = await context.newPage();

await page.goto("https://quran.com/7/4")

//  await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.5.1.min.js'})






   namesarr =  await page.evaluate(() => Array.from(document.querySelectorAll("input[type='checkbox'] + span")).map(elem => ""+elem.textContent.replace(/[^a-zA-Z\-\s]/gi,"").toLowerCase().trim()));



   var tanzilDir = path.join(__dirname, 'quran com')

   var newtanzilDir = path.join(__dirname, 'qurancomclean')

   var myjson = {}

for (var filename of fs.readdirSync(tanzilDir) ) {

   myjson = {}
      val=   namesarr.find(elem => elem.includes(filename))
  if(!val)
   continue

       console.log("found ",val)
      val=val.split('-')
      if(val[1]&& val[1].trim()!=val[0].trim()){
        myjson['language'] = val[0].trim()
          myjson['author'] = val[1].trim()
      }else if(val[1]){
        myjson['language'] = val[0].trim()
      }else{
         myjson['author'] = val[0].trim()
      }


   var mystr = fs.readFileSync(path.join(tanzilDir,filename)).toString()




   fs.writeFileSync(path.join(newtanzilDir,filename), mystr+'\n'+JSON.stringify(myjson,null,4))

}





  await browser.close();
}
start()
