
// generates isolang.csv using Book1.csv , which was retreived from https://www.loc.gov/standards/iso639-2/php/code_list.php
var fs = require('fs');
var path = require('path');

content = fs.readFileSync(path.join(__dirname, 'Book1.csv')).toString();


var textarr = content.split(/\r?\n/);
var holderarr  = []
for (line of textarr){

column = line.split(',')

if(column[2])
column[2] = column[2].split(';')[0].replace("languages","").replace(/[^a-zA-Z]/gi,"").trim()

if(column[0].search('(T)')>0){
var temp = holderarr.slice(-1)
temp = temp[0].split(',')
temp[0] = column[0].replace("(T)", "").trim();

holderarr[holderarr.length-1] = temp.join(',')

}else{
  holderarr.push(column.join(','))
}



}









 fs.writeFileSync(path.join(__dirname, 'isolang.csv'), holderarr.join('\n'));
