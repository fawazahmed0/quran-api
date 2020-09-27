
const fs = require('fs');
const path = require('path');

var startDir = path.join(__dirname, "jawaot")

var fullval = ""

for (var filename of fs.readdirSync(startDir)) {



fullval = fullval+'\n'+fs.readFileSync(path.join(startDir,filename)).toString()



  }
  fs.writeFileSync(path.join(__dirname, "jawa.txt"), fullval)
