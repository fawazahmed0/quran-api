const fs = require('fs');
const path = require('path');
const {
  spawnSync
} = require('child_process');

var startDir = path.join(__dirname,"tomerge")
var outputDir = path.join(__dirname,"merged")
var notoFile = path.join(__dirname,"noto","NotoSansArabic-Regular.ttf")
var merge_fonts_script = path.join(__dirname,"mergefonts.ff")
var emSize = 1000

 for (var filename of fs.readdirSync(startDir)) {
//filename = 'amiri-quran-colored-org.otf'
try{
var output = spawnSync('fontforge', ['-lang=ff', '-script',merge_fonts_script,path.join(startDir,filename),notoFile,emSize,path.join(outputDir,filename.replace(/\-org(?=\.)/,"-full"))])
}catch(err){
  if (fs.existsSync(path.join(startDir,filename))) {
      fs.unlinkSync(path.join(startDir,filename))
  }
}
  }

// fontforge -lang=ff -script mergefonts.ff <font1> <font2> <font_size_in_em> <output_merged_font>
