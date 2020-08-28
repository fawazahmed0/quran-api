// checks for line that might have problems, uses a good translation with 6236 with similar langauge to check
var fs = require('fs');
var path = require('path');

var badarr = fs.readFileSync(path.join(__dirname, 'UthmanicDoori1 Ver08.txt.new')).toString().split('\n')

var cleanhafarr = fs.readFileSync(path.join(__dirname, 'ara-quranuthmanihaf.txt')).toString().split('\n')


for (var i=0;i<badarr.length;i++){

  if(badarr[i].length>cleanhafarr[i].length){

if(badarr[i].length*0.8>cleanhafarr[i].length){
    console.log("Problem in line ",i+1)
    break
  }

  }else{
    if(badarr[i].length<cleanhafarr[i].length*0.8){
        console.log("Problem in line ",i+1)
        break
}
  }


}

//fs.writeFileSync('added new.txt', arr.join('\n'))
