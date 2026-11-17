// import {test, expect} from '@playwright/test'

// test ("single select dropdown", async({page})=>{
//     await page.goto ("https://testautomationpractice.blogspot.com/")

//     await page.locator('//select[@id="country"]').selectOption("United Kingdom")
//     await page.locator('//select[@id="country"]').selectOption({value:"india"})
//     await page.locator('//select[@id="country"]').selectOption({index:4})

       const text=await page.locator('//select[@id="country"]').textContent() //inner text  //alttext
       console.log(text);



//     await page.pause()

// })





//task

import {test, expect} from '@playwright/test'

test ("single select dropdown", async({page})=>{
    await page.goto ("http://letcode.in/dropdowns/")


    await expect (page.locator('//label[@for="fruits"]')).toHaveText("Select the apple using visible text")
    await page.locator('//select[@id="fruits"]').selectOption("Apple")

    await expect (page.locator('//label[@for="lang"]')).toContainText("Select the last programming")
    await page.locator('//select[@id="lang"]').selectOption({index:4})

    await expect (page.locator('//label[@for="country"]')).toHaveText("Select India using value & print the selected value")
    await page.locator('//select[@id="country"]').selectOption({value:"India"})


    // await page.locator('//select[@id="fruits"]').selectOption("Apple")
    // await page.locator('//select[@id="lang"]').selectOption({index:4})
    // await page.locator('//select[@id="country"]').selectOption({value:"India"})

//      await page.pause()
})




