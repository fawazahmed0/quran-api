const fs = require('fs');
const path = require('path');

var qpath = path.join(__dirname, 'qurancomclean')


  for (var filename of fs.readdirSync(qpath)) {


var [orgarr, filterarr, jsondata] = readDBTxt(path.join(qpath,filename))

if(!jsondata)
  console.log(filename, " doesn't have json in it")
else if(!jsondata['language'])
  console.log(filename, " doesn't have language specified in it")
  else if(!jsondata['author'])
    console.log(filename, " doesn't have author specified in it")
  }







// reads the text file and returns [originalarr, filtererdarr, jsondata]
function readDBTxt(pathToFile) {
  var orgarr = fs.readFileSync(pathToFile).toString().split(/\r?\n/)
  // now remove all lines with empty strings or spaces or tabs
  // https://stackoverflow.com/a/281335
  // return elememnt only if they are not spaces/tabs and emptyline
  var filterarr = orgarr.filter(elem => !/^\s*$/.test(elem))
  // search & validate JSON in array
  var temp = getJSONInArray(filterarr)
  if (Array.isArray(temp))
    return [orgarr, filterarr.slice(0, temp[1]), temp[0]]
  else
    return [orgarr, filterarr]
}

// gets the JSON from end of array, returns [jsondata, i], where i is the position from end where jsondata was parsed successfully
function getJSONInArray(arr) {
  var i = 0
  while (!isValidJSON(arr.slice(--i).join('\n')) && i > -100);
  if (i != -100)
    return [JSON.parse(arr.slice(i).join('\n')), i]
}


// function which checks whether a string is valid json or not
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}


// cleans the json
function cleanifyObject(jsondata) {
  // lowercase for all json , trimming white spaces and also removing empty json and also cleaning the keys and values
  //https://stackoverflow.com/a/54985484/2437224
  var newjson = Object.fromEntries(
    Object.entries(jsondata).map(([k, v]) => {
      if (v != undefined && v)
        return ["" + k.replace(/[^A-Za-z]+/gi, "").trim().toLowerCase(), "" + v.replace(/\s\s+/gi, " ").trim()]
      return ["", ""]
    })
  );
  // removing empty keys
  delete newjson[""]
  return newjson
}
