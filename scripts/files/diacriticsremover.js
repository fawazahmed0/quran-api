const path = require('path')
const fs = require('fs')

let diacriticsDir = path.join(__dirname, 'diacritics')

let outputDir = path.join(__dirname, 'nodiacritics')
fs.mkdirSync(outputDir, { recursive: true })

for(let file of fs.readdirSync(diacriticsDir)){
let str = fs.readFileSync(path.join(diacriticsDir, file), 'utf8').normalize("NFD").replace(/\p{Diacritic}/gu, "")
fs.writeFileSync(path.join(outputDir, file), str)
}