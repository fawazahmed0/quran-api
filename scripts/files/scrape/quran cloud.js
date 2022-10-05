const fs = require('fs')
const path = require('path')
// https://api.alquran.cloud/v1/quran/quran-simple
async function begin(){
   let  data = fs.readFileSync(path.join(__dirname, 'quran-simple.json')).toString();
   data = JSON.parse(data)

   fs.writeFileSync(path.join(__dirname,'out.txt'),data['data']['surahs'].map(e=>e['ayahs']).flat().map(e=>e['text']).join('\n'))


}

begin()
