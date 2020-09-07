const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

// https://github.com/opentypejs/opentype.js

async function make(){
  var font={}
  var a = "hello"
    try{
    var font =  opentype.loadSync('uthmanic-hafs-ver13-org.ttf');
      if(font.table && font.tables.name && font.tables.name.fontFamily && font.tables.name.fontFamily.en)
     a = font.tables.name.fontFamily.en
     a = a+' '+font.tables.name.fontSubfamily.en
     a = a+' '+'v'+parseFloat(font.tables.name.version.en.match(/\d+\.?\d*/)[0])

  }catch(e){}
console.log(a)
        /*
        console.log(font.tables.name.fontFamily.en)
        console.log(font.tables.name.fontSubfamily.en)
        console.log(font.tables.name.manufacturer.en)
        console.log(font.tables.name.designer.en)
        console.log(font.tables.name.designerURL.en)
        console.log(font.tables.name.manufacturerURL.en)
        console.log(font.tables.name.version.en)
*/
    //  fs.writeFileSync('test.json', font)
}
make()
