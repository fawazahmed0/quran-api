const fs = require('fs')
const path = require('path')


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
// https://unicode.org/reports/tr18/#General_Category_Property
// https://unicode.org/reports/tr24/#Script
// https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties

// 

async function begin(){

  let pathToDiacritics = path.join(__dirname, 'diacritics')
  let pathToSave = path.join(__dirname, 'nondiacritics')
  fs.mkdirSync(pathToSave,{recursive:true})

  for(let file of fs.readdirSync(pathToDiacritics)){
    let str =  fs.readFileSync(path.join(pathToDiacritics, file)).toString()
                                                                                                    // replacing hamza wasl with alif, it may seem opposite on looking
    str = str.normalize("NFD").replace(/\p{Diacritic}|\p{Mark}|\p{Extender}|\p{Bidi_Control}/gu, "").replaceAll('ٱ','ا')
    fs.writeFileSync(path.join(pathToSave, file),str)
  }

}
begin()
