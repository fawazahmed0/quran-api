// This script increases the verse number by a increment value from one verse to other verse, it help in correcting mistakes in translation numbering
// It assumes the verse starts with a number, it increment only those that are part of translation

const fs = require('fs');
const path = require('path');

// increases or decreses the verse number by this value, assign negative value to decrement the verse numbers
var increment = 1
var filePath = path.join(__dirname, 'newinc.txt')

var fromLineNo = 6608
var toLineNo=6649
// Set the number verse pattern here, which needs to be incremented
var numberRegex  = new RegExp(/^\s*\d+/i);






var arr = fs.readFileSync(filePath).toString().split(/\r?\n/)

for(var i=fromLineNo-1;i<toLineNo;i++){
  if(numberRegex.test(arr[i])){
  value = arr[i].match(numberRegex)[0]
  arr[i] = arr[i].replace(value, parseInt(value.trim())+increment)

  }

}



fs.writeFileSync('newinc2.txt',arr.join('\n'))
