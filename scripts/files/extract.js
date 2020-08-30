const extract = require('extract-zip')
var path = require('path');
async function main () {


    await extract(path.join(__dirname,'958a9d85-bd91-41e4-87aa-7c64007a2ac8'), { dir: path.join(__dirname,'test2')  })
    console.log('Extraction complete')

}
main()
