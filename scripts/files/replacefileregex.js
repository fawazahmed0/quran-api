const fs = require('fs');
const path = require('path');




filename = 'HafsNastaleeq Ver10.txt.new.1'

retval = fs.readFileSync(path.join(filename)).toString().replace(/[\ufb50-\ufdff]/gi," ")

fs.writeFileSync(path.join(filename+'.clean'),retval)
