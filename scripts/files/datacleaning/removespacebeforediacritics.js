const fs = require('fs')
const path = require('path')

let filesPath = path.join(__dirname, 'files')
let files = fs.readdirSync(filesPath)




for(let file of files){

  let str =  fs.readFileSync(path.join(filesPath,file)).toString()
   str = str.normalize("NFD").replace(/\r?\s+(\p{Diacritic}|\p{Mark}|\p{Extender}|\p{Bidi_Control})/gu,'$1')
   fs.writeFileSync(path.join(filesPath,file), str)


}
