var fs = require('fs');
var path = require('path');

var qinfo = fs.readFileSync(path.join(__dirname, 'info.json')).toString();
qinfo = JSON.parse(qinfo)

var linearr = fs.readFileSync(path.join(__dirname, 'HafsNastaleeq Ver10.txt.new')).toString().split('\n')


i=0;
for (var val of qinfo['chapters']) {
val['arabicname'] = linearr[i++]
}


fs.writeFileSync('myfirsttest.pretty.json', JSON.stringify(qinfo,null,4))
//fs.writeFileSync(path.join(editionsDir, json['name'], i + '', j + ".json"), JSON.stringify(vjson, null, prettyindent))
