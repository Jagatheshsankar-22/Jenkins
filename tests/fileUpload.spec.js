

import {test, expect} from "@playwright/test"

test ("file upload", async({page})=>{
 await page.goto ("https://testautomationpractice.blogspot.com/")

 await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/91956/Desktop/name.txt")

 await page.locator('//button[text()="Upload Single File"]').click()

 await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected: name.txt')

//  await page.pause()


})


test ("multiple file upload", async({page})=>{
 await page.goto ("https://testautomationpractice.blogspot.com/")
-
 await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/91956/Desktop/name.txt", "C:/Users/91956/Desktop/Releving reason.txt"])

 await page.locator('//button[text()="Upload Multiple Files"]').click()

 await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Multiple files selected:')

//  await page.pause()

 //unable to remove 1 file from uploded files. If we want to remove 2 files to replace the other 2 files instead of them.
 // Or else remove both files

 await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])

//  await page.pause()


})


test ("file download", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/FileDownload.html")

    const [downloadedfile]=await Promise.all([
    page.waitForEvent('download'),
    page.locator('//a[text()="Download" and @type="button"]').click()
])

const file="D:/Playwright/download/samplefile.pdf"
await downloadedfile.saveAs(file)
// await page.pause()

})