// https://gist.github.com/Jezternz/c8e9fafc2c114e079829974e3764db75
const csvStringToArray = strData =>
{
    const objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
    let arrMatches = null, arrData = [[]];
    while (arrMatches = objPattern.exec(strData)){
        if (arrMatches[1].length && arrMatches[1] !== ",")arrData.push([]);
        arrData[arrData.length - 1].push(arrMatches[2] ?
            arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") :
            arrMatches[3]);
    }
    return arrData;
}

var fs = require('fs');
var path = require('path');
var Papa = require('papaparse');

var lang = "# Language:"
var src  = "https://quranenc"
var id = "# Translation ID: "

var { firefox } = require('playwright');

var url = 'https://quranenc.com/en/home'


async function test(){


  /*
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

*/
authors = JSON.parse(fs.readFileSync('cleanenc.json').toString())

console.log(authors)

  var tanzilDir = path.join(__dirname, 'quranenc')

  var newtanzilDir = path.join(__dirname, 'cleanenc')

  var myjson = {}

    for (var filename of fs.readdirSync(tanzilDir) ) {

  myjson = {}
  var myarr = fs.readFileSync(path.join(tanzilDir,filename)).toString().split('\n')

myjson['source'] = ""
var lastindex
  for(var i=1;i<30;i++){

    if(myarr[i].startsWith('#')){
  if(myarr[i].includes(lang))
     myjson['language'] = myarr[i].replace(lang,"").replace(/[\n\r]/gi,"")
  else if(myarr[i].includes(id) && authors[myarr[i].replace(id,"").trim()])
    myjson['author'] =  authors[myarr[i].replace(id,"").replace(/[\n\r]/gi,"").trim()]
  else if(/http.*$/si.test(myarr[i]))
    myjson['source'] =  myarr[i].match(/http.*$/si)[0].replace(/[\n\r]/gi,"")+ " , "+myjson['source']


lastindex = i

    }



  }
console.log("myjsonjson ",myjson)
myarr.splice(0,lastindex+2)


for(var i =0;i< myarr.length;i++){
//console.log(Papa.parse(myarr[i]))
// csvStringToArray(myarr[i])

csvval = Papa.parse(myarr[i]).data[0]

if(csvval&&csvval[2] && csvval[3])
myarr[i]=csvval[2]+' '+csvval[3]
else if(csvval&&csvval[3])
    myarr[i]=csvval[3]
else
myarr[i]=""

}

fs.writeFileSync(path.join(newtanzilDir,filename), myarr.join('\n')+'\n'+JSON.stringify(myjson,null,4))



}
//await browser.close();
}
test()
