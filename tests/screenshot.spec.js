import {test, expect} from "@playwright/test"

test ("screenshot", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.screenshot({path:"D:/Playwright/file/"+"automation.png"})

    // await page.screenshot({path:"D:/Playwright/file/"+"automationFull.png", fullPage:true})

    await page.locator('//img[@class="wikipedia-icon"]').screenshot ({path:"D:/Playwright/file/"+"Wikipedia.png"})
})