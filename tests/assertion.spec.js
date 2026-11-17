// import {test, expect} from '@playwright/test'

// test("assertion", async({page})=>{
    
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.com/")
//     await expect.soft(page).toHaveTitle("Automation Testing Practice")

//     await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible()
//     await expect(page.locator('//p[@class="description"]')).toHaveText("For Selenium, Cypress & Playwright")
//     await expect(page.locator('//p[@class="description"]')).toContainText("Playwright")

//     const input='//input[@id="name"]'

//     await expect(page.locator(input)).toBeEmpty()

//     await (page.locator(input)).fill("playwright")
//     await expect.soft(page.locator(input)).toHaveValue("playwright")

//     await expect(page.locator(input)).not. toBeEmpty()
// })




// import {test, expect} from '@playwright/test'

// test("assertion", async ({page})=>{

//     await page.goto ("https://testautomationpractice.blogspot.com/")

//     await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.com/")
//     await expect.soft(page).toHaveTitle("Automation Testing Practice")

//     await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible()

// })





import {test, expect} from '@playwright/test'

// test("practice test", async ({page})=>{

//     await page.goto ("https://practicetestautomation.com/logged-in-successfully/")

//     await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
//     await expect(page.locator('//strong[text()="Congratulations student. You successfully logged in!"]')).toContainText("successfully logged in!")
//     await expect(page.locator('//a[text()="Log out"]')).toBeVisible()

// })


  test ("invalid username", async ({page})=>{

        await page.goto("https://practicetestautomation.com/practice-test-login/");

        await page.locator("#username").fill("invalidUser");
        await page.locator("#password").fill("Password123");
        await page.locator("#submit").click();

        await expect(page.locator("#error")).toBeVisible();

        await expect(page.locator("#error")).toHaveText("Your username is invalid!");

    // await page.pause();

 })

test("negative password test", async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");


})
    