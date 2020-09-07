
var fs = require('fs');
var path = require('path');
var Papa = require('papaparse');

var lang = "# Language:"
var src  = "https://quranenc"
var id = "# Translation ID: "

var { firefox } = require('playwright');

var url = 'https://quranenc.com/en/home'


async function test(){





// fetching authornames from website
  const browser = await firefox.launch({acceptDownloads:true,headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url,{timeout:160000})

  var authors = await page.evaluate(() => {
     var obj = {}
nodearr = document.querySelectorAll('.btn-default')

for(var val of nodearr){
  hrefval = val.href +""
  if(hrefval.includes('browse'))
      hrefval = hrefval.replace("https://quranenc.com/en/browse/","")
   else
   continue

   parenttext = val.parentElement.textContent +""
   parenttext = parenttext.replace(/\n?\s\s*\n?/gi," ").trim().match(/^.*?\ translation/i)

   if(Array.isArray(parenttext)){
       parenttext = parenttext[0].replace(/\'?s? translation.*$/i,"")
       obj[hrefval] = parenttext
}
}
return obj

  });
fs.writeFileSync('cleanenc.json',JSON.stringify(authors))

authors = JSON.parse(fs.readFileSync('cleanenc.json').toString())

console.log(authors)

  var tanzilDir = path.join(__dirname, 'quranenc fetched')

  var newtanzilDir = path.join(__dirname, 'quranenc fetchedclean')

  var myjson = {}

    for (var filename of fs.readdirSync(tanzilDir) ) {

  myjson = {}
  var mystr = fs.readFileSync(path.join(tanzilDir,filename)).toString()






     myjson['language'] = filename.split('_')[0]
     if(authors[filename])
    myjson['author'] =  authors[filename]






console.log("myjsonjson ",myjson)


fs.writeFileSync(path.join(newtanzilDir,filename), mystr+'\n'+JSON.stringify(myjson,null,4))



}
//await browser.close();
}
test()
