// This will change json to allow future modifications with no issues
var fs = require('fs');
var path = require('path');
var { spawnSync } = require( 'child_process' );


  gLangCodes = fs.readFileSync(path.join(__dirname, 'google-lang-codes.min.json')).toString();
gLangCodes = JSON.parse(gLangCodes)
  isocodes = fs.readFileSync(path.join(__dirname, 'iso-lang.min.json')).toString();
isocodes = JSON.parse(isocodes)

jsontemp  = {}

for(val of isocodes.codes){

  jsontemp[val.language] = {}
  jsontemp[val.language].iso1=val.iso1
  jsontemp[val.language].iso2=val.iso2


}
fs.writeFileSync('iso-test.json', JSON.stringify(jsontemp))
