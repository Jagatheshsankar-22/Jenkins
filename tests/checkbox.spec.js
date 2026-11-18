// import {test, expect} from "@playwright/test"

// test ("radio button", async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('//input[@id="female"]').check()
//     await expect(page.locator('//input[@id="female"]')).toBeChecked()

//     await expect(page.locator('//input[@id="male"]')).not.toBeChecked()

//     await page.pause()

//        await page.locator('//input[@id="female"]').uncheck()
//        await page.pause()


// })


// test ("checkbox", async ({page})=>{
  
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('//input[@id="monday"]').check()
//     await expect(page.locator('//input[@id="monday"]')).toBeChecked()

//     await page.pause()

//     await page.locator('//input[@id="monday"]').check()

//     await page.pause()



// })

import {test, expect} from "@playwright/test"

test ("multiple checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let locat = ['//input[@id="sunday"]', '//input[@id="monday"]', '//input[@id="wednesday"]', '//input[@id="friday"]']

    for (let i of locat){
        await page.locator(i).check()
        await expect (page.locator(i)).toBeChecked()

    }

    let day = ["sunday", "monday", "wednesday", "friday"]

    for (let i of day){
        await page.locator(`//input[@id="${i}"]`).check()
        await expect (page.locator(`//input[@id="${i}"]`)).toBeChecked()
    }

    await page.pause()
})













// import {test, expect} from "@playwright/test"

// test ("task", async ({page})=>{

//     await page.goto("https://letcode.in/radio")

//     await page.locator('//input[@id="no"]').check()
//     await expect(page.locator('//input[@id="no"]')).toBeChecked()
   
//     await page.pause()

//     await page.locator('//input[@id="one"]').check()
//     await expect(page.locator('//input[@id="one"]')).toBeChecked()
//     await expect(page.locator('//input[@id="two"]')).not.toBeChecked()


//     await page.pause()


//     await page.locator('//input[@id="nobug"]').check()
//     await expect(page.locator('//input[@id="nobug"]')).toBeChecked()
//     await page.locator('//input[@name="bug"]').check()
//     await expect(page.locator('//input[@name="bug"]')).toBeChecked()

//     await page.pause()


//     await page.locator('//input[@id="notfoo"]').check()
//     await expect(page.locator('//input[@id="notfoo"]')).toBeChecked()

//     await page.pause()

    

    
//     await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()
//      await page.pause()

    

    
   
// })


