
const fs = require('fs');
const path = require('path');


// saving isocodes in json
isocodes = fs.readFileSync(path.join(__dirname, 'isocodes', 'iso-codes.min.json')).toString();
isocodes = JSON.parse(isocodes)

// saving google translate language codes in json
gLangCodes = fs.readFileSync(path.join(__dirname, 'isocodes', 'google-codes.min.json')).toString();
gLangCodes = JSON.parse(gLangCodes)


editions = fs.readFileSync(path.join(__dirname,'editions.min.json')).toString();
editions = JSON.parse(editions)
var edlang = []

  for (var [key, val] of Object.entries(editions)) {

edlang.push(val.language.toLowerCase())

}

edlang = [...new Set(edlang)];

var glang = Object.values(gLangCodes)

var isolang =  Object.keys(isocodes)

val1 = glang.filter(e=>!edlang.includes(e))


val2 = isolang.filter(e=>!edlang.includes(e))


fs.writeFileSync('langstoAdd.txt',val1.join('\n'))
