

const fs = require('fs');
const path = require('path');
var pathstr = 'G:\\GitHub\\Things to copyin\\qdata\\done\\toupdate\\To paste in startDir'
var todelarr = fs.readdirSync(pathstr).filter(e=>/\-lad?\.txt/i.test(e))
for (var val of todelarr) {
fs.unlinkSync(path.join(pathstr,val))




}
