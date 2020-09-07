var fs = require('fs');
var path = require('path');


var fileqarr  = fs.readFileSync('arabic_seraj-qura initial').toString().split('\n')
var filetarr  = fs.readFileSync('arabic_seraj').toString().split('\n')


var fullarr = []
for(var i = 0;i<fileqarr.length;i++){

fullarr[i] = fileqarr[i]+'('+  filetarr[i].split('.').filter(Boolean).join(',')+  ')'

}


fs.writeFileSync('newmergedtafseer', fullarr.join('\n'))
