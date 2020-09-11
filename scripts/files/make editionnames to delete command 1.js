const fs = require('fs');
const path = require('path');

var str = "node apiscript.js delete "
var fullstr  = str+fs.readdirSync('quran-api\\database\\linebyline').map(e=>e.replace(".txt","")).filter(e => /^fas\-|^pus\-|^snd\-|^tat\-|^uig\-|^urd\-/i.test(e) && /\-lad?$/.test(e)).join(' ')


 fs.writeFileSync('command', fullstr)

 
