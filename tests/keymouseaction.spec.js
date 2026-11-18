import {test,expect} from "@playwright/test"

test ("keyboard action", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="name"]').fill("playwright")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    // await page.pause()

})

test ("hover", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[text()="Point Me"]').hover()
    await page.locator('//a[text()="Mobiles"]').click("Mobiles")
    // await page.pause()
})

test("right click", async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.locator('//span[text()="right click me"]').click({button:"right"})
    // await page.pause()
})

test ("doubleclick", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="field1"]').fill("playwright")
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await expect(page.locator('//input[@id="field2"]')).toHaveValue("playwright")
    // await page.pause()
})


test("scroll", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.mouse.wheel(0,2000)  //(x,y) =>> x=>horizontal scroll,   y=>vertical scroll
    await page.pause()

    await page.mouse.wheel(0,-2000)
    await page.pause()

    await page.locator('//a[text()="Blogger"]').scrollIntoViewIfNeeded()
    // await page.pause()

})

test ("drag and drop", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    // const source=page.locator('//div[@id="draggable"]')
    // const target=page.locator('//div[@id="droppable"]')
    // await source.dragTo(target)


    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))
    // await page.pause()
})


test("hover task", async({page})=>{

    await page.goto("https://www.myntra.com/")
    await page.locator('//a[@data-group="men"]').hover()
    await page.locator('//a[text()="Men"]/follwing-sibling::div//a[text()="T-Shirts"]').click()
    // await page.pause()
})


test("drag and drop task", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Static.html")
    // const source1=page.locator('//img[@id="angular"]')
    // const target1=page.locator('//div[@class="dragged"]')
    // await source1.dragTo(target1)
    // const source2=page.locator('//img[@id="mongo"]')
    // const target2=page.locator('//div[@class="dragged"]')
    // await source2.dragTo(target2)
    // const source3=page.locator('//img[@id="node"]')
    // const target3=page.locator('//div[@class="dragged"]')
    // await source3.dragTo(target3)
    // await page.pause()
    await page.locator('//img[@id="angular"]').dragTo(page.locator('//div[@class="dragged"]'))
    await page.locator('//img[@id="mongo"]').dragTo(page.locator('//div[@class="dragged"]'))
    await page.locator('//img[@id="node"]').dragTo(page.locator('//div[@class="dragged"]'))
    // await page.pause()

    let source=['//img[@id="angular"]', '//img[@id="mongo"]', '//img[@id="node"]']
    let taget=['div[@class=dragged]']

    await source.dragTo(target)


})






