
// generates iso-lang.json using isolang.csv
var fs = require('fs');
var path = require('path');

content = fs.readFileSync(path.join(__dirname, 'isolang.csv')).toString();


var textarr = content.split(/\r?\n/);



var filterarr = textarr.filter(elem=>{
  // return elememnt only if they are not spaces/tabs and emptyline
  if(!/^\s+$/.test(elem) && elem)
     return elem;
})

filterarr=[...new Set(filterarr)]

var myjson = {codes:[{"language":"","iso1":"","iso2":""}]}
i=0
for(line of filterarr){
  line = line.toLowerCase().replace(/[^a-zA-Z,]/gi,"");
  column = line.split(',')

  myjson.codes[i]={}
  myjson.codes[i].languages=column[2].trim()
myjson.codes[i].iso1=column[1].trim()
myjson.codes[i].iso2=column[0].trim()
i++
}


 fs.writeFileSync(path.join(__dirname, 'iso-lang.min.json'), JSON.stringify(myjson));
