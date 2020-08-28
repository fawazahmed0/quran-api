var fs = require('fs');
var path = require('path');
var readstream
//https://nodejs.org/api/stream.html
//https://nodejs.org/api/fs.html
// https://stackabuse.com/read-files-with-node-js/
// use async for streams https://nodejs.org/api/stream.html#stream_consuming_readable_streams_with_async_iterators
/*
for(i=0;i<1;i++){

 readstream = fs.createReadStream('testermuyassser', { start: 100, end:fs.statSync('testermuyassser').size-100});

readstream.on('data', (chunk) => {
  console.log(chunk.toString());
});
readstream.on('end', () => {
  console.log('Call what function or code you want');
});

console.log(fs.statSync('testermuyassser').size)
}
*/


async function test(){
 readstream = fs.createReadStream('testermuyassser', { start: fs.statSync('testermuyassser').size-1000});
// end:fs.statSync('albanian_nahi_v1.1.0-csv.1.csv').size-100
var data= ''
  for await (var chunk of readstream) {
  data=data+  chunk.toString()
  }
  return data.split('\n')

}
async function one(){
val = await test()
console.log(val)

//test().then(console.log)
//console.log('hello')
}
one()
