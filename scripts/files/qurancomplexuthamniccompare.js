// This script will compare the standard quran file i.e uthmanic etc with other variant of quran in a dirval folder,
// and tells the verse line number which is different
// The file should be preprocessed i.e the standard file should be 6236 and the other variant files should have newlines etc removed with verse number
// if exists any , use regex to preprocess the files
// This script was made to bring the warsh etc variants into uthamnic verse numbering, so apps can absorb the quran easily

const fs = require('fs');
const path = require('path');

// Standard quran file name
var stdfile = "ara-quranacademy.txt"
// The other variant line should be similar by this much percentage value, if it's less than this value, then the line is completely different
var percent = 0.80

// Store the other variants like sossi ,warsh etc to be compared
var dirval = "sync"


var arrstd = fs.readFileSync(stdfile).toString().normalize('NFD').replace(/[^\u0620-\u064A\s]/gi," ").split(/\r?\n/)




for(var filename of fs.readdirSync(dirval)){

var arrnonstd = fs.readFileSync(path.join(dirval,filename)).toString().normalize('NFD').replace(/[^\u0620-\u064A\s]/gi," ").split(/\r?\n/)


var counter;
outerloop:
for(var i=0;i<arrstd.length;i++){
   counter = 0
  // console.log(i)
  for(var j=0;j<arrstd[i].length;j++){

if(new RegExp(arrstd[i][j],"gi").test(arrnonstd[i]) ){
      arrnonstd[i]=  arrnonstd[i].replace(arrstd[i][j],"")
        counter++
}
  }
if(counter<arrstd[i].length*percent && arrstd[i].replace(/\s+/gi,"").length>4)
{
  console.log("problem in line ",i+1,filename)
  break outerloop;
}
//if(arrstd[i].replace(/\s\s+/gi, " ")!=arrnonstd[i].replace(/\s\s+/gi, " ")){
  //   console.log("problem in ",i+1)
//break
//}


}

}
