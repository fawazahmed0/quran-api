
const fs = require('fs');
const path = require('path');

const {
  spawnSync
} = require('child_process');



var startDir = path.join(__dirname, "maceot")


for (var filename of fs.readdirSync(startDir)) {
//filename = "Punjabi Quran Maulana Wahiduddin Khan (www.alqurantranslation.com)_Page_001.tiff"
var output = spawnSync('tesseract', [path.join(startDir,filename),'stdout','--psm','6','-l','mkd'])



fs.appendFileSync('mace.txt', output.stdout.toString())


  }
