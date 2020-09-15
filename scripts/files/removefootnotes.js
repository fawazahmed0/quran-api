
// This script removes footnotes from the translation

const fs = require('fs');
const path = require('path');


var filePath = path.join(__dirname, 'numberinc.txt')


var arr = fs.readFileSync(filePath).toString().split(/\r?\n/)

// Set the number footnotes pattern here,which will be removed
var numberRegex  = new RegExp(/^\s*\d+\s+.*\r?\n/i);

for(var i=0;i<arr.length;i++){

  if(numberRegex.test(arr[i])){

   arr[i]=''
   for(var j=i+1;j<10;j++){
     // Remove the next line incase it's not empty as it could be part of footnotes
     if(!/^\s*$/.test(elem).test(arr[j]))
           arr[j]=''
      else 
        break;

   }

  }

}
