import {test, expect, chromium} from "@playwright/test"

// test("handling tabs", async()=>{

//    const browser=await chromium.launch()
//    //conntext
//    const context=await browser.newContext()
//    const pageOne=await context.newPage()

//    await pageOne.goto ("https://testautomationpractice.blogspot.com/")
  
//    console.log(await pageOne.title());
//    await pageOne.locator('//input[@id="name"]').fill("javascript")

//    await pageOne.waitForTimeout(3000)


//    const pageTwo=await context.newPage()

//    await pageTwo.goto ("https://www.facebook.com/")
  
//    console.log(await pageTwo.title());
//    await pageTwo.locator('//input[@name="email"]').fill("example@gmail.com")

//    await pageTwo.waitForTimeout(3000)
   
// })


test("handing tabs task", async()=>{

   const browser=await chromium.launch()
   const context=await browser.newContext()
   const pageOne=await context.newPage()

   await pageOne.goto("https://opensource-demo.orangehrmlive.com/")

   console.log(await pageOne.title())
   await pageOne.locator('//input[@name="username"]').fill("jagathesh")
   await pageOne.waitForTimeout(6000)

   const pageTwo=await context.newPage()
   await pageTwo.goto("https://www.flipkart.com/")

   console.log(await pageTwo.title())
   await pageTwo.locator('//div[text()="Apple iPhone 16 (Black, 128 GB)"]').click()
   await pageTwo.waitForTimeout(6000)
})



// test ("tab handling", async({browser})=>{  //page =>>context =>> browser

//    const context= await browser.newContext()
//    const page=await context.newPage()

//    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//    console.log(await page.title())
//    await page.locator('//input[@name="username"]').fill("playwright")

//    const [newTab]=await Promise.all([
//       context.waitForEvent('page'),
//       page.locator('//a[text()="OrangeHRM, Inc"]').click()

//    ])

//    await newTab.waitForLoadState()
//    await newTab.locator('//button[text()="Book a Free Demo"]').click()
   
//    await newTab.pause()

// })


// test("tab handling", async({browser})=>{

//    const context = await browser.newContext()
//    const page = await context.newPage()

//    await page.goto("https://www.flipkart.com/")
//    console.log(await page.title());


//    const[newTab]=await promise.all([
//       context.waitForEvent('page')
//       page.locator('//input[@value="apple mobile"]').click()

//    ])
   
//    await newTab.waitForLoadState()
//    await expect(newTab.locator())


   
// })




test ("date picker", async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")

 await page.locator('//input[id="datepicker"]').fill("14/10/2026")
//  await page.pause()
})