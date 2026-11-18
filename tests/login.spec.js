import {test, expect} from "@playwright/test"

// test ("login using CSS", async ({page})=>{
    
//  await page.goto ("https://www.facebook.com/")
 
//  await page.locator("#_R_1h6kqsqppb6amH1_").fill("example@gamil.com")

//  await page.locator('[type="password"]').fill("Password123")

//  await page.locator('[aria-label="Log in"]').click()

//  //await page.waitForTimeout(5000)

//  await page.pause()

// })



// test ("login using build-in locators", async ({page}) => {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await page.getByPlaceholder("Username").fill("Admin")

//     await page.getByPlaceholder("Password").fill("admin123")

//     await page.getByRole("button",{name:"Login"}).click()

//     await page.pause()

// })




// task  CSS

// import {test, expect} from "@playwright/test"

// test ("orangaHRM", async ({page}) =>{
//     await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await page.locator('[placeholder="Username"]').fill("Admin")

//     await page.locator('[type="password"]').fill("admin123")

//     await page.locator('[type="submit"]').click()


// })





// test ("Register", async ({page}) =>{

//     await page.goto("https://demoqa.com/login")

//     await page.getByRole("button", {name:"New User"}).click()

//     await page.getByPlaceholder("First Name").fill("Jagathesh")

//     await page.getByPlaceholder("Last Name").fill("Sankar")

//     await page.getByPlaceholder("UserName").fill("Admin")

//     await page.getByPlaceholder("Password").fill("admin123")

//     await page.getByRole("button", {name:"Register"}).click()

// })

// test ("login", async({page})=>{

//     await page.goto("https://demoqa.com/login")
    
//     await page.getByPlaceholder("UserName").fill("Admin")

//     await page.getByPlaceholder("Password").fill("admin123")

//     await page.getByRole("button", {name:"Login"}).click()
// })





test("login using xpath", async ({page})=>{
    
 await page.goto ("https://www.facebook.com/")
 
 await page.locator('//input[@name="email"]').fill("example@gamil.com")

 await page.locator('//input[@type="password"]').fill("Password123")

 await page.locator('//div[@aria-label="Log in"]').click()

 //await page.waitForTimeout(5000)

 await page.pause()

})


// anotation types (only, skip)