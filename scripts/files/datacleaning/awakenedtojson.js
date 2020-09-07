
var fs = require('fs');
var path = require('path');



var tanzilDir = path.join(__dirname, 'islamawakened')

var newtanzilDir = path.join(__dirname, 'cleaned')

var myjson = {}

  for (var filename of fs.readdirSync(tanzilDir) ) {

myjson = {}
var mystr = fs.readFileSync(path.join(tanzilDir,filename)).toString()

myjson['author'] = filename



fs.writeFileSync(path.join(newtanzilDir,filename), mystr+'\n'+JSON.stringify(myjson,null,4))

  }
