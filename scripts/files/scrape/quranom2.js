// Get translation id https://quran.api-docs.io/v4/resources/translations
// Get translation https://quran.api-docs.io/v4/quran/get-a-single-translation
const fs = require('fs');
let str = fs.readFileSync('allah.json').toString();

let json = JSON.parse(str);

fs.writeFileSync('allah.txt', json.translations.map(e=>e.text).join('\n'));
