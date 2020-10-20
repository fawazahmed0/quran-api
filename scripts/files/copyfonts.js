const fs = require('fs');
const path = require('path');
  for (var filename of fs.readdirSync('fonts')) {
    if(/\-org\..{1,5}$/.test(filename))
    fs.copyFileSync(path.join(__dirname,'fonts', filename), path.join("start",filename.replace("-org.",".")))


  }
