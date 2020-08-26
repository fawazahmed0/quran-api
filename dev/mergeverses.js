var fs = require('fs');
var path = require('path');


var orgarr = []
  for (var filename of fs.readdirSync(path.join('quran'))) {

   orgarr = orgarr.concat(fs.readFileSync(path.join('quran',filename)).toString().split(/\r?\n/))

  }
fs.writeFileSync('testjoin', orgarr.filter(elem => !/^\s*$/.test(elem)).map(s => s.trim()).join('\n'))
