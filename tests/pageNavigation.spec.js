import {test, expect} from "@playwright/test"

test ("orangaHRM", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/") //login.page

    await page.locator('[placeholder="Username"]').fill("Admin")

    await page.locator('[type="password"]').fill("admin123")

    await page.locator('[type="submit"]').click() //home page

    // await page.pause()

    await page.goBack()   //login page

    // await page.pause()
    await page.goForward()  //home page
    await page.pause()
    await page.reload()
    // await page.pause()
})