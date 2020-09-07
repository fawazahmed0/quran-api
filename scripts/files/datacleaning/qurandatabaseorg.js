
var fs = require('fs');
var path = require('path');



var tanzilDir = path.join(__dirname, 'qurandatabase.org')

var newtanzilDir = path.join(__dirname, 'qurandatabaseorg clean')

var myjson = {}

  for (var filename of fs.readdirSync(tanzilDir) ) {

myjson = {}
var mystr = fs.readFileSync(path.join(tanzilDir,filename)).toString()

newname = filename.replace(/\.txt/,"").replace(/\-/gi," ").replace(/\d+/gi,"").replace(/\s\s*/gi," ").trim()

myarr = newname.split(" ")

if(myarr[1])
myjson['author'] = myarr.slice(1).join(' ')

if(myarr[0])
myjson['language'] = myarr[0]
myjson['source'] = "http://www.qurandatabase.org"

fs.writeFileSync(path.join(newtanzilDir,filename), mystr+JSON.stringify(myjson,null,4))

 }
