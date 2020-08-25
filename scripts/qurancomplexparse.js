
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
var filename = "Nastaleeq v10.txt"

var suraregex =  new RegExp(sura+".*", "gi");

var basmalaregex =  new RegExp(basmala, "gi");


var arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];



var mystr = fs.readFileSync(path.join(__dirname, filename)).toString();

// replace surah line
mystr = mystr.replace(suraregex,"")

var matches  = mystr.matchAll(basmalaregex);
var tempstr = mystr.split('')
var counter = 1;

// replace bismisllah
for (var match of matches) {
//  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);


// we don't want to remove first bismisllah and sulaiman letter bismisllah
if(counter!=1 && counter!=27){
for(var j =match.index;j<match.index +match[0].length;j++){
     tempstr[j] = ""

   }

}

     counter++;
}

mystr = tempstr.join('')






    for(var i=0; i<10; i++)
    {
      mystr = mystr.replace(arabicNumbers[i], i);
    }




mystrarr = mystr.replace(/\r?\n/gi,"").replace(/(\d+)/gi,"\n$1\n").split(/\n/).filter(elem => !/^\s*$/.test(elem)).map(s => s.trim())
//works perfect

for(i=0;i<mystrarr.length;i++){
  if(i%2==0){
    temp = mystrarr[i]
    mystrarr[i] = mystrarr[i+1]
    mystrarr[i+1] = temp
  }


}



// .replace(/hello.*\n.*\n/gi,"")

//mystr = mystr.replace(/\n+/gi,"").replace(/(\d+)/gi,"$1\n")

fs.writeFileSync(path.join(filename+'.new'), mystrarr.join('\n'))


// .replace("سُورَةُ","hello").replace("بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ ","hi").replace(/hello.*hi/gsi,"")
