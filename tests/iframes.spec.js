import {test, expect} from "@playwright/test"
// test ("handling iframes", async ({page})=>{

//     await page.goto("https://practice-automation.com/iframes/")

//     const automation=await page.frames()
//     console.log("frame count :", automation.length);

//     for(let i of automation){
//     console.log("frame url", i.url());
//    }
    
//     await expect(page.locator('//h1[text()="Iframes"]')).toHaveText("Iframes")
//     await page.locator('//a[text()="Docs"]').click()
// })





test("handling iframes using frame method", async ({page})=>{

    await page.goto("https://practice-automation.com/iframes/")

    await expect(page.locator('//h1[text()="Iframes"]')).toHaveText("Iframes")

   const playwright = await page.frame({name:"top-iframe"})
   await playwright.locator('//a[text()="Docs"]').click()

   const selinium = await page.frame({url:"https://www.selenium.dev/"})
   await selinium.locator('//a[@class="nav-link"]/child::span[text()="Downloads"]').click()
//    await page.pause()
 
})




test ("handling iframes using framelocator method", async ({page})=>{

    await page.goto("https://practice-automation.com/iframes/")

    await expect(page.locator('//h1[text()="Iframes"]')).toHaveText("Iframes")

    //frame =>>> name & src
    //framelocator=>>> xpath & css

   const playwright = page.frameLocator('//iframe[@id="iframe-1"]')
   await playwright.locator('//a[text()="Docs"]').click()

   const selinium = page.frameLocator('//iframe[@id="iframe-2"]')
   await selinium.locator('//span[text()="Downloads"]').click()

//    await page.pause()


 
})


