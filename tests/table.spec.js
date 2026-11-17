import {test, expect} from "@playwright/test"

test("handling table", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const rows = page.locator('//table[@id="productTable"]/tbody/tr')
    const column = page.locator('//table[@id="productTable"]/thead/tr/th')

    console.log("ROWS COUNT :", await rows.count());
    console.log("COLUMN COUNT :", await column.count());



//   //method 1
  // await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()
  
//   //method 2
  // await rows.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()

// //method 3
 
// const phone=await rows.filter({
//   has:page.locator("td"),
//   hasText:"Smartphone"
// })
 
// await phone.locator('//input[@type="checkbox"]').check()

//  await page.pause()




//multiple checkbox

//method 1

let product = ["Smartphone",  "Laptop", "Smartwatch"]

//  for (let i of product){
//  await rows.locator(`//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
//  } 

//  //method 2

 const phone = await rows.filter({

  has:page.locator("td"),
  hasText:/Smartphone|Laptop|Smartwatch/
 })

const products=await phone.all()


for(let i of products){

await i.locator('//input[@type="checkbox"]').check()
}







test ("date picker", async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")

 await page.locator('//input[id="datepicker"]').fill(14/10/2026)

//  await page.pause()
})

