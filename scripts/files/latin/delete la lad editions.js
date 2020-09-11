

const fs = require('fs');
const path = require('path');

var todelarr = fs.readdirSync(__dirname).filter(e=>/\-lad?\.txt/i.test(e))
for (var val of todelarr) {
  // Don't delete self
  if(path.basename(__filename) != val && ! fs.statSync(path.join(__dirname,val)).isDirectory())
fs.unlinkSync(path.join(__dirname,val))

}
