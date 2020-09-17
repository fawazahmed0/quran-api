const fs = require('fs');
const path = require('path');


var startDir = path.join(__dirname, "test")

for (var filename of fs.readdirSync(startDir)){
var myarr = []

  // saving isocodes in json
var tempfile = fs.readFileSync(path.join(startDir, filename)).toString();
var tempjson = JSON.parse(tempfile)

for(var val of tempjson.data.surahs){

for(var aya of val.ayahs)
myarr.push(aya.text)


}

fs.writeFileSync(path.join(startDir,filename+"new"), myarr.join('\n'))




}
