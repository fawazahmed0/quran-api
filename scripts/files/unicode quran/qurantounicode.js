const fs = require('fs');
const path = require('path');

filename = 'ara-quranwarsh.txt'

// Save a backup of file
fs.copyFileSync(path.join(__dirname, filename), path.join("backup",filename+getRandomNo(1000)))

var laam = "\u06D9"
var taa = "\u0615"
var heart = "\u08E2"
var ain = "\u08D6"
var jeem = "\u06DA"
var dot3 = "\u06DB"
var sadlaamyaa = "\u06D6"
var kaaf = "\u08D7"
var zaal = "\u0617"
var meem = "\u06D8"
var saad = "\u08D5"
var kaafplusfaa = "\u08DE"
var partialseen = "\u0614"
var partialsaad = "\u08E1"
var sakthmerged = "\u08DD"
var sajda = "\u08DB"
var aarbaa4 = "\u08D4"
var thalatha3 = "\u08DA"
var footnote = "\u08E0"
var wakft = "\u08DF"



var doublezeerindo = "\u0656"
// utf-8 \u08f2
var doublezabarindo = "\u0657"
// utf-8 \u08f0

var doublepeshindo = "\u065E"
// utf-8 \u08f1



// replace the value from [i][0] to [i][1]
//fromToRegex = [["\u061E","\u06DB"],["\uFBB6","\u06DB"]]
fromToRegex = [//["\u06ED\r?\n","\u065c\u200f\n"],["\u06ED","\u065c"],
[doublezeerindo+"\r?\n","\u08f2\u200f\n"],[doublezeerindo,"\u08f2"],
[doublezabarindo+"\r?\n","\u08f0\u200f\n"],[doublezabarindo,"\u08f0"],
[doublepeshindo+"\r?\n","\u08f1\u200f\n"],[doublepeshindo,"\u08f1"]]



filevalue = fs.readFileSync(path.join(__dirname, filename)).toString()


for(var value of fromToRegex){

filevalue = filevalue.replace(new RegExp(value[0],"gui")," "+value[1]+" ")

}

  fs.writeFileSync(filename, filevalue)








function getRandomNo(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
