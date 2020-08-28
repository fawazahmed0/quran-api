// generates quran-structure.json using en.sahih
var fs = require('fs');
var path = require('path');


var content = fs.readFileSync(path.join(__dirname, 'en.sahih')).toString();

json = JSON.parse(content)

var chaplength = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6]

myjson = {"chapters":[{"chapter":1,"name":"","englishname":"","arabicname":"","revelation":"","verses":[{"line":1,"verse":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizb":1,"sajda":false}]}]};

for(i=1;i<=114;i++)
{

myjson.chapters[i-1] = {}
  myjson.chapters[i-1]['chapter'] = i
  myjson.chapters[i-1]['name'] = json.data.surahs[i-1]['englishName']
  myjson.chapters[i-1]['englishname'] = json.data.surahs[i-1]['englishNameTranslation']
  myjson.chapters[i-1]['arabicname'] = json.data.surahs[i-1]['name']
  myjson.chapters[i-1]['revelation'] = json.data.surahs[i-1]['revelationType'] == "Meccan"? "Mecca" :"Madina"
myjson.chapters[i-1]['verses'] = []
for(j=1;j<=chaplength[i-1];j++){
//  console.log(j)

myjson.chapters[i-1]['verses'][j-1] = {}
  myjson.chapters[i-1]['verses'][j-1]["verse"] = j;
  myjson.chapters[i-1]['verses'][j-1]["line"] = json.data.surahs[i-1].ayahs[j-1]['number']
  myjson.chapters[i-1]['verses'][j-1]["juz"] = json.data.surahs[i-1].ayahs[j-1]['juz']
  myjson.chapters[i-1]['verses'][j-1]["manzil"] = json.data.surahs[i-1].ayahs[j-1]['manzil']
  myjson.chapters[i-1]['verses'][j-1]["page"] = json.data.surahs[i-1].ayahs[j-1]['page']
  myjson.chapters[i-1]['verses'][j-1]["ruku"] = json.data.surahs[i-1].ayahs[j-1]['ruku']
  myjson.chapters[i-1]['verses'][j-1]["hizb"] = json.data.surahs[i-1].ayahs[j-1]['hizbQuarter']
    myjson.chapters[i-1]['verses'][j-1]["sajda"] = json.data.surahs[i-1].ayahs[j-1]['sajda']
}




}

fs.writeFileSync(path.join(__dirname, 'quran-structure.json'), JSON.stringify(myjson, null, 4));
