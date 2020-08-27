
// Usage:
// Convert the word doc downloaded from qurancomplex to text with UTF-8 encoding(use ms word)(only use files which have basmallah as first verse of fatiha)
// remove the unneccessary text at the beginning of file and at the end of file(ctrl+end)
// use notepad++ for editing arabic text (view->RTL to show langauge properly)
// copy سُورَة and بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ  from the text file and assign to the sura, basmala variables
// keep text file in same directory as this script and assign the name of file to filename variable
// run the script using node qurancomplexparse.js and the newly created file will be {filename}.new in the same directory
// you can use that for apiscript.js create



var fs = require('fs');
var path = require('path');

var sura ="سُوْرَةُ"
var basmala = "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ"
var filename = "HafsNastaleeq Ver10.txt"

var suraregex =  new RegExp(sura+".*", "gi");




var mystr = fs.readFileSync(path.join(__dirname, filename)).toString();

var arr = mystr.match(suraregex)

arr = arr.map(val => val.replace(sura,"").trim())


fs.writeFileSync(path.join(filename+'.new'), arr.join('\n'))


// .replace("سُورَةُ","hello").replace("بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ ","hi").replace(/hello.*hi/gsi,"")
