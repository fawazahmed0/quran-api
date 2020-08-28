
var fs = require('fs');
var path = require('path');




qinfo = fs.readFileSync(path.join(__dirname, 'testnew.min.json')).toString();
qinfo = JSON.parse(qinfo)


fs.writeFileSync(path.join('testnew.json'), JSON.stringify(qinfo,null,4))
