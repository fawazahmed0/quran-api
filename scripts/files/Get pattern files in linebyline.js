
const fs = require('fs');
const path = require('path');

// Folder that holds all the translations that needs to be added
var startDir = path.join(__dirname, "start")
// Folder that holds all the quran editions
var editionsFolder = "editions"
var editionsDir = path.join(__dirname, editionsFolder)
// Stores the files for download and as backup
var databaseDir = path.join(__dirname, 'database')
// Stores translations in line by line format of 6236 lines
var linebylineDir = path.join(databaseDir, 'linebyline')




    for (var filename of fs.readdirSync(linebylineDir)) {
var arr = fs.readFileSync(path.join(linebylineDir,filename)).toString().split(/\r?\n/).filter(elem => !/^\s*$/.test(elem))
if(/^\s*\d+\|\d+/i.test(arr[0]))
console.log("problem in ,", filename)
    }
