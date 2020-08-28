// Generates google-lang-codes.json file using arraygooglecodes.txt

var fs = require('fs');
var path = require('path');

content = fs.readFileSync(path.join(__dirname, 'arraygooglecodes.txt')).toString();


arr = JSON.parse(content)

myjson = {"googletranscode":[{"language":"","code":""}]}
i=0;
for(val of arr){

  temp = val.split(',')

  myjson.googletranscode[i]={}
  myjson.googletranscode[i].language=temp[0]
myjson.googletranscode[i].code=temp[1]
i++;
}

 fs.writeFileSync(path.join(__dirname, 'google-lang-codes.min.json'), JSON.stringify(myjson));
