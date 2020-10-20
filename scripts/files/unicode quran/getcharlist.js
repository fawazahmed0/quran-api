
const fs = require('fs');
const path = require('path');
filename = 'ara-quranwarsh.txt'

  str = fs.readFileSync(path.join(__dirname, filename)).toString();


  fs.writeFileSync(path.join(filename+'list.txt'),    [...new Set(str.split(''))].sort().join('\n'))
