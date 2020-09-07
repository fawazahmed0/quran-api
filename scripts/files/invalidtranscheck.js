// script that checks whether the files in database have 6236 lines or not, made this for solve problems due to empty line bug

const fs = require('fs');
const path = require('path');
var pathstr = 'G:\\GitHub\\quran-api\\database\\linebyline'
for (var filename of fs.readdirSync(pathstr)) {

var myarr = fs.readFileSync(path.join(pathstr,filename)).toString().split('\n')

var temp = getJSONInArray(myarr)
if (Array.isArray(temp)){
 if(myarr.slice(0, temp[1]).length!=6236)
     console.log("problem in ",filename)
}else
  console.log("no json found in ",filename)



}








// gets the JSON from end of array, returns [jsondata, i], where i is the position from end where jsondata was parsed successfully
function getJSONInArray(arr) {
  var i = 0
  while (!isValidJSON(arr.slice(--i).join('\n')) && i > -100);
  if (i != -100)
    return [JSON.parse(arr.slice(i).join('\n')), i]
}


// function which checks whether a string is valid json or not
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
