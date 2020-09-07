const fs = require('fs');
const path = require('path');

var str = "node apiscript.js delete "
var fullstr  = str+fs.readdirSync('toupdate').map(e=>e.replace(".txt","")).filter(e => !/\-lad?$/i.test(e)).join(' ')


 fs.writeFileSync('command', fullstr)
