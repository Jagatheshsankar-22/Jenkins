// import {test, expect} from "@playwright/test"

// test ("simple alert", async ({page})=>{
//   await page.goto ("https://testautomationpractice.blogspot.com/")

//   page.on('dialog', async alert =>{
//     console.log(alert.type());
//     console.log(alert.message());

//     //expect(alert.message()).toBe("I am an alert box!")
//     expect(alert.message("I am an alert box!"))

//     await alert.accept()
//   })

//   await page.locator('//button[@id="alertBtn"]').click()
//   //await page.pause()

//   await page.waitForTimeout(5000)
// })



test ("confirmation alert", async ({page})=>{

  await page.goto ("https://testautomationpractice.blogspot.com/")

  page.on("dialog", async alert =>{
   
    console.log(alert.type());

    expect(alert.message()).toBe("Press a button!")

    //await alert.accept()
    await alert.dismiss()
  
  })

  await (page.locator('//button[@id="confirmBtn"]')).click()
  // await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")

   await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")
   await page.pause()
})


test ("prompt alert", async ({page})=>{
 await page.goto ("https://testautomationpractice.blogspot.com/")

 page.on ("dialog", async alert =>{
  console.log(alert.type());
  expect(alert.message()).toBe("Please enter your name:")

  // await alert.accept("playwright")
  await alert.dismiss("playwright")
  
})

await page.locator('//button[@id="promptBtn"]').click()
//  await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello playwright! How are you today?")
 await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")

//  await page.pause()

})

// test ("task", async ({page})=>{
 
//   await page.goto ("https://letcode.in/alert")

//   page.on ('dialog', async alert =>{
//     console.log(alert.type());
//     console.log(alert.message());

//     expect(alert.message("Hey! Welcome to LetCode"))

//     })

//   await page.locator('//button[@id="accept"]').click()
//   await page.pause()

// })


// test ("task", async ({page})=>{

// await page.goto("https://letcode.in/alert")

// page.on ('dialog', async alert ={

//   console.log(alert.type());
//   console.log(alert.message());

//   expect(alert.message("Hey! Welcome to LetCode"))

// })

// await page.locator ('//button[@id="accept"]').click()
// await page.pause()
 
// })

// page.on('dialog', async alert ={

//   console.log(alert.type());
//   console.log(alert.messge());

//   expect(alert.message("gfandgn"))
  
  

// })



  import {test, expect} from "@playwright/test"

  test("confirmation alert 1", async ({page})=>{

    await page.goto ("https://letcode.in/alert/")

    page.on("dialog", async alert =>{
        console.log(alert.type());
        expect(alert.message()).toBe("Are you happy with LetCode?")
        await alert.accept()
        // await alert.dismiss()
   })
  

  await page.locator('//button[@id="confirm"]').click()
  await expect(page.locator('//div[@class="mt-3 text-xs text-slate-500"]')).toContainText("User selected: ")
  // await expect(page.locator('//div[contain(text()="User selected: ")]').toContainText("User selected: Cancel (False)")
 })
  

