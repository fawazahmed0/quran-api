
var fs = require('fs');
var path = require('path');

var chaplength = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]
// contains chapter verse mappings for each line
var mappings = []

for (i = 1; i <= 114; i++) {
  for (j = 1; j <= chaplength[i - 1]; j++) {
    mappings.push([i, j])
  }
}
// ca


qinfo = fs.readFileSync(path.join(__dirname, 'test.json')).toString();
qinfo = JSON.parse(qinfo)
temp = {}
var stor;
for (var key of Object.keys(qinfo)) {
// stor =  JSON.parse(JSON.stringify(qinfo[key]))

  // we don't want to generate for verses,chapters, as it's generation logic is different
  if (key != "verses" && key != "chapters" && key != "sajdas") {

    for (var j = 0; j < qinfo[key]['references'].length; j++) {


      var fromIndex = (elem) => elem[0] == qinfo[key]['references'][j].chapter  && elem[1] == qinfo[key]['references'][j].verse;
      var from = mappings.findIndex(fromIndex)
      // Get index of [toChap,toVerse] in mappings array
var to;
var tempmap;
try{
      var toIndex = (elem) => elem[0] == qinfo[key]['references'][j + 1].chapter  && elem[1] == qinfo[key]['references'][j + 1].verse;
      var to = mappings.findIndex(toIndex)
 //console.log('hi')

       tempmap = mappings

       tempmap = mappings.slice(from, to)
}catch(e){

         tempmap = mappings

         tempmap = mappings.slice(from)

}









temp[key.slice(0,-1)] = j+1
temp['start'] = {}
temp['end'] = {}
temp['start']['chapter'] =qinfo[key]['references'][j].chapter
temp['start']['verse'] =qinfo[key]['references'][j].verse
temp['end']['chapter'] =tempmap.slice(-1)[0][0]
temp['end']['verse'] =tempmap.slice(-1)[0][1]




qinfo[key]['references'][j] = JSON.parse(JSON.stringify(temp))



temp = {}







    }
  }
}








fs.writeFileSync(path.join('testnew.json'), JSON.stringify(qinfo,null,4))

/*
i=1;
for(var val of qinfo['sajdas']['references']){
temp = JSON.parse(JSON.stringify(val))
  delete val.recommended
  delete val.chapter
  delete val.verse
  delete val.obligatory
  val['sajda'] = i++
  for(var [key,value] of Object.entries(temp)){
     val[key] = value

  }



}
fs.writeFileSync(path.join('testnew.json'), JSON.stringify(qinfo))
/*
/*

for (var key of Object.keys(qinfo)) {
  // we don't want to generate for verses,chapters, as it's generation logic is different
  if (key != "verses" && key != "chapters" && key != "sajdas") {

    for (var j = 0; j < qinfo[key]['references'].length; j++) {

      var fromchap = qinfo[key]['references'][j].chapter
      var fromverse = qinfo[key]['references'][j].verse
      if (qinfo[key]['references'][j + 1]) {
        var tochap = qinfo[key]['references'][j + 1].chapter
        var toverse = qinfo[key]['references'][j + 1].verse
      } else {
        var tochap = ""
        var toverse = ""
      }
      // writing the chapter and verse in the specified folder
      chapVerseWriter(fromchap, fromverse, tochap, toverse, arr, path.join(editionsDir, json['name'], key, j + 1 + ''), key)
    }
  }
}


// writes chapter and verse in json and .min.json format
function chapVerseWriter(fromChap, fromVerse, toChap, toVerse, arr, pathname, keyname, inclusive) {
  // Get index of [fromChap,fromVerse] in mappings array
  var fromIndex = (elem) => elem[0] == fromChap && elem[1] == fromVerse;
  var from = mappings.findIndex(fromIndex)
  // Get index of [toChap,toVerse] in mappings array
  var toIndex = (elem) => elem[0] == toChap && elem[1] == toVerse;
  var to = mappings.findIndex(toIndex)
  // If inclusive flag is given then we will include the last to verse also during generation
  if (inclusive)
    ++to

  // if toChap and toVerse is not defined or empty, then we will create till end
  if (!toChap && !toVerse)
    to = arr.length

  var tempmap = mappings
  // stores the lines to be written
  arr = arr.slice(from, to)
  var tempmap = mappings.slice(from, to)
  var json = {}
  json[keyname] = []
  //console.log('hi',to)
  for (i = 0; i < tempmap.length; i++) {
    json[keyname][i] = {}
    json[keyname][i]['chapter'] = tempmap[i][0]
    json[keyname][i]['verse'] = tempmap[i][1]
    json[keyname][i]['text'] = arr[i]
  }

  fs.writeFile(pathname + ".json", JSON.stringify(json, null, prettyindent), err => {
    if (err) throw err
  })
  // writing minified version also
  fs.writeFile(pathname + ".min.json", JSON.stringify(json), err => {
    if (err) throw err
  })
}
*/
