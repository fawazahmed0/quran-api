
var fs = require('fs');
var path = require('path');

var trans = "Translator:"
var lang = "Language:"

var tanzilDir = path.join(__dirname, 'tanzil.net trans')

var newtanzilDir = path.join(__dirname, 'newtanzil')

var myjson = {}

  for (var filename of fs.readdirSync(tanzilDir) ) {

myjson = {}
var myarr = fs.readFileSync(path.join(tanzilDir,filename)).toString().split('\n')

// .slice(-100).filter(elem => elem.startsWith('#'))

for(var i=myarr.length-1;i>myarr.length-100;i--){

  if(myarr[i].startsWith('#')){
    if(myarr[i].includes(trans))
          myjson['author'] = myarr[i].replace(trans,"").replace('#',"").trim()
if(myarr[i].includes(lang))
      myjson['language'] = myarr[i].replace(lang,"").replace('#',"").trim()



  }



}
myarr = myarr.filter(elem => !elem.startsWith('#'))

myjson['source'] = "http://tanzil.net"
myjson['comments'] = ""

fs.writeFileSync(path.join(newtanzilDir,filename), myarr.join('\n')+'\n'+JSON.stringify(myjson,null,4))

  }
