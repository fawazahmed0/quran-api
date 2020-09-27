
const fs = require('fs');
const path = require('path');

const {
  spawnSync
} = require('child_process');



var startDir = path.join(__dirname, "iranonot")


for (var filename of fs.readdirSync(startDir)) {
//filename = "Punjabi Quran Maulana Wahiduddin Khan (www.alqurantranslation.com)_Page_001.tiff"
var output = spawnSync('tesseract', [path.join(startDir,filename),'stdout','--psm','6','-l',path.join('script','Latin')])



fs.appendFileSync('iranon.txt', output.stdout.toString())


  }
