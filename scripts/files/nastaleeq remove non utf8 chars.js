
var fs = require('fs');
var path = require('path');


var filename = "ara-qurannastaleeqSukun.txt"

var mystr = fs.readFileSync(path.join(__dirname, filename)).toString();

cleanstr = mystr.split('').filter(char => char.normalize('NFKC').length != 3 && char!='؀').join('')

fs.writeFileSync(filename+".clean", cleanstr)
