
const fs = require('fs');
const path = require('path');


// capitalizes all the first letters in a sentense
var capitalize = words => words.split(' ').map(w => w[0].toUpperCase() + w.substring(1)).join(' ')

editions = fs.readFileSync(path.join(__dirname,'editions.min.json')).toString();
editions = JSON.parse(editions)
var edlang = []
var ocred = []
console.log("Total translations in editions are ",Object.entries(editions).length)
  for (var [key, val] of Object.entries(editions)) {

edlang.push(val.language.toLowerCase())

if(val.comments.toLowerCase().includes(' ocr'))
ocred.push(val.language.toLowerCase())

}

edlang = [...new Set(edlang)];
ocred = [...new Set(ocred)];

edlang = edlang.map(e => "- "+capitalize(e)).sort()

ocred = ocred.map(e => "- "+capitalize(e)).sort()


fs.writeFileSync('edlangs.txt',edlang.join('\n')+"\nOCRED:\n"+ocred.join('\n'))
