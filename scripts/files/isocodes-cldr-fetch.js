const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

async function test(){
 let isopath = path.join(__dirname,'isocodes.json')
  let data=  await fetch('https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-localenames-full/main/en/languages.json').then(res=>res.json())
 let myenteries =  Object.entries(data.main.en.localeDisplayNames.languages).filter(e=>e[0].length<4).map(e=>e.map(e=>e.toLowerCase().trim().replace(/\s/g,'').replace(/[^a-z]/ig,'')))
 let isocodes = fs.readFileSync(isopath).toString()
 isocodes = JSON.parse(isocodes)

 let allisos =    Object.values(isocodes).map(e=>[e.iso1,e.iso2]).flat()

for(let [key , value] of myenteries){

    if(allisos.includes(key))
    continue
    if(!isocodes[value])
        isocodes[value] = {}

     

        if(key.length==2)
        isocodes[value].iso1 = key
        else
        isocodes[value].iso2 = key

}
isocodes = sortJSON(isocodes)
fs.writeFileSync(isopath,JSON.stringify(isocodes,null,4))
fs.writeFileSync(path.join(__dirname,'isocodes.min.json'),JSON.stringify(isocodes))

}

test()

  // values in arr is given first preferences & then by alphabetical order
  function sortJSON(jsonObj,arr=[]){
    let objectKeys = Object.keys(jsonObj)
    // sort numbers properly
    if(!objectKeys.some(isNaN))
    objectKeys.sort((a, b) => parseFloat(a)-parseFloat(b))
    else
    objectKeys.sort()

    return arr.concat(objectKeys).reduce(
        (obj, key) => { 
          if(jsonObj[key])
          obj[key] = jsonObj[key]; 
          return obj;
        }, 
        {}
      );

  }