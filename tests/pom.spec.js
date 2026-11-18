// import {test, expect} from "@playwright/test"
// import Orange from "../pages/orangeHrm"
// import cred from "../test-data/ohrm.json"



// test ("login in orangehrm", async({page})=>{
    
//     const hrm=new Orange(page)
    
//     hrm.navigation()
//     hrm.login(cred.user, cred.pass)
//     await page.pause()

// })


import {test, expect} from "@playwright/test"
import Orange from "../pages/orangeHrm"


test ("login ohrm", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const log=new Orange(page)

    await log.login("Admin","admin123")
    
    await page.pause()
})