
const fs = require('fs');
const path = require('path');

var startDir = path.join(__dirname, "engot")

var fullval = ""

for (var filename of fs.readdirSync(startDir)) {



fullval = fullval+'\n'+fs.readFileSync(path.join(startDir,filename)).toString()



  }
  fs.writeFileSync(path.join(__dirname, "fullenglish.txt"), fullval)
