var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

// https://stackoverflow.com/a/11869589/2437224
// https://stackoverflow.com/a/37227430/2437224
// https://stackoverflow.com/questions/46441667/reading-binary-data-in-node-js

buf = fs.readFileSync('font33.ttf')
var hash = crypto.createHash('md5').update(buf,"binary").digest('hex');
console.log(hash); // 9b74c9897bac770ffc029102a200c5de
