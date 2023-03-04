const Papa = require("papaparse")
const fs = require('fs')
const path = require('path')

function getJSONInArray(arr) {
    var i = 0
    while (!isValidJSON(arr.slice(--i).join('\n')) && i > -100);
    if (i != -100)
      return [JSON.parse(arr.slice(i).join('\n')), i]
  }

  function isValidJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  async function begin(){
    let pathToDir = path.join(__dirname, 'chapterverse')
    let pathToSave = path.join(__dirname, 'chapterversecsv')
    for(let file of fs.readdirSync(pathToDir)){
      let pathToFile = path.join(pathToDir,file)
      
        fs.writeFileSync(path.join(pathToSave, file.replace(/\.txt$/i, '.csv')),Papa.unparse(Papa.parse(readDBTxt(pathToFile), {delimiter:'|'})))
        
        


    }

  }
begin()


  function readDBTxt(pathToFile) {
    var orgarr = fs.readFileSync(pathToFile).toString().split(/\r?\n/)

    var temp = getJSONInArray(orgarr)
    // If the json exists, then Remove the json from the file
  
        return orgarr.slice(0, temp[1]).join('\n')

 
  }
