import {test,expect} from "@playwright/test"

test.beforeAll("test started succesfully", async()=>{
    console.log("Test started succesfully");
})

test.beforeEach("page navigation", async({page})=>{
     await page.goto("https://www.saucedemo.com/")
})

test.afterEach("Logout",async({page})=>{
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})

test.afterAll("test ended", async()=>{
    console.log("Test ended succesfully");
})

test ("login one", async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test ("login two", async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test ("login three", async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test ("login four", async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()

    // await page.pause()
})