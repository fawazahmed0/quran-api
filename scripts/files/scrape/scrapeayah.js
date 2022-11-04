const { firefox } = require('playwright');
const fs = require('fs')
const path = require('path')

async function begin() {

    var chaplength = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]
    let browser, context, page;
    let bigarr = []
    let countval = 0


    for (let i = 0; i <= 113; i++) {
    

   
    

        for (let j = 0; j < chaplength[i]; j++) {

            if(countval++%500==0 || countval==1 ){
                if(browser)
                await browser.close()

                 browser = await firefox.launch({ headless: true });
                 context = await browser.newContext()
                 page = await context.newPage();
                await page.goto('https://dailyayat.com/index.php');

            }

            console.log(`${i + 1}|${j + 1}`)

            try {
                await page.close()
                page = await context.newPage();
                await page.goto('https://dailyayat.com/index.php');
                await page.evaluate(() => document.querySelector('[class="ur"]').textContent = '')
                //await page.evaluate((index) => document.getElementsByTagName('select')[0].selectedIndex = index, i)
                await page.locator('select  >> nth=0').selectOption({ index: i })
                await page.locator('select  >> nth=1').selectOption({ index: j })
                //await page.evaluate((index) => document.getElementsByTagName('select')[1].selectedIndex = index, j)
                await page.locator('button[type="submit"]').click()
                await page.waitForLoadState('networkidle')
                await page.waitForFunction(() => document.querySelector('[class="ur"]').textContent.length > 1,null,{timeout:3000})

                for (let k = 0; k < 8; k++) {



                    if (!Array.isArray(bigarr[k]))
                        bigarr[k] = []



                          
      
                    await page.evaluate(() => document.querySelector('[class="ur"]').textContent = '')
                    await page.locator('select  >> nth=5').selectOption({ index: k })
                    await page.waitForLoadState('networkidle')
                    await page.waitForFunction(() => document.querySelector('[class="ur"]').textContent.length > 1,null, {timeout:3000})

                    let value = await page.evaluate(() => document.querySelector('[class="ur"]').textContent)

  


                    let count = 0
                    while (value.toLowerCase().includes('loading') && value!='' ) {


                        value = await page.evaluate(() => document.querySelector('[class="ur"]').textContent)
                        await page.waitForTimeout(10)

                        if (count++ > 1000 ) 
                            throw "retry";
                        


                    }

                  


                    //await page.waitForTimeout(10000)
                    value = value.replace(/\s+/gi, ' ')
                    if (!Array.isArray(bigarr[k][i]))
                        bigarr[k][i] = []
                    bigarr[k][i][j] = `${i + 1}|${j + 1}|${value}`

                   // console.log(bigarr[k][i][j])


                }



            } catch (e) {
                j--;
                console.error(e)
            }
        }


    }

    let counter = 0
    for (let value of bigarr) {
        fs.writeFileSync(path.join(__dirname, `${counter++}.txt`), value.flat().join('\n'))
    }





    // document.getElementsByTagName('select')[0].options



    await browser.close();


}

begin()