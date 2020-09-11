// move the failed latingen by reading failed latin generation.txt  into start direcotry
// This script should be placed in root of repo to make it work
const fs = require('fs');
const path = require('path');

var failedfile = path.join(__dirname, 'failed latin generation.txt')
var startDir = path.join(__dirname, "start")
var chapverseDir = path.join(__dirname, 'database', "chapterverse")

arr = fs.readFileSync(path.join(__dirname, 'failed latin generation.txt')).toString().split(/\r?\n/).filter(elem => !/^\s*$/.test(elem))

// remove duplicates
arr = [...new Set(arr)]

for(var val of arr){
try{
fs.copyFileSync(path.join(chapverseDir, val)+'.txt', path.join(startDir, val)+'.txt');
}catch(e){console.log("copying for ",val, ".txt Failed")}
}
