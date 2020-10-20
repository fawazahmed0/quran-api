const fs = require('fs');
const path = require('path');

filename = 'nastaleeq.txt'

 arr = fs.readFileSync(path.join(__dirname, filename)).toString().match(/[\ufb50-\ufdff]/ugi)
//.match(/[\ufb50-\ufdff]/ugi)
// .match(/[\ufd30-\ufdf5]/ugi)
// fd30-fdf5
uniquearr = [...new Set(arr)];

uniquearr = uniquearr.map(e=>"\\u"+e.codePointAt(0).toString(16).padStart(4,0)+"    "+e)
  fs.writeFileSync("list.txt", uniquearr.join('\n'))
console.log(uniquearr.length)
