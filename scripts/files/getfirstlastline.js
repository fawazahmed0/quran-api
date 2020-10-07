const fs = require('fs');
const path = require('path');


var startDir = path.join(__dirname,'database','linebyline')



  for (var filename of fs.readdirSync(startDir)) {

myarr = fs.readFileSync(path.join(startDir, filename)).toString().split(/\r?\n/)

  fs.appendFileSync(path.join("lines.txt"), '\n'+myarr[0] + '\n'+myarr[6235]+'\n'+filename+'\n\n')




  }
