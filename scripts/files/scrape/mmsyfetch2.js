const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs')
const path = require('path')
let largeArr = []

async function main(){
    for(let i=1;;i++){
        let res = await fetch(`https://quran.mmsy.info/data/page/${i}.json`)
        if(!res.ok)
        break
        let data = await res.json()
        largeArr = largeArr.concat(data.map(e=> e[7][2]['data']))
        console.log(i)
        
        }
        
        fs.writeFileSync(path.join(__dirname,'data.txt'),largeArr.join('\n'))
        
}

main()
