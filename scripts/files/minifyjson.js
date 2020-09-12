const fs = require('fs');
const path = require('path');

isocodes = fs.readFileSync(path.join(__dirname,'iso-codes.json')).toString();
isocodes = JSON.parse(isocodes)

fs.writeFileSync("test.json", JSON.stringify(isocodes))