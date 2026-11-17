import {test, expect} from "@playwright/test"
test ("task for sauce", async({page})=>{

await page.goto ("https://www.saucedemo.com/")
await expect (page.locator('//div[text()="Swag Labs"]')).toHaveText("Swag Labs")
await page.locator('//input[@placeholder="Username"]').fill("standard_user")
await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
await page.locator('//input[@id="login-button"]').click()
await expect (page.locator('//span[text()="Products"]')).toHaveText("Products")

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
await page.locator('//select[@aria-label="Sort products"]').click()
await page.locator('//select[@data-test="product-sort-container"]').selectOption("lohi")
const produts=[
    "Sauce-labs-onesie",
    "Sauce-labs-bolt-t-shirt"
]
for (const cart of produts) {
    await page.locator('//button[@name="add-to-cart-${cart}"]').click()
}
await expect(page.locator('//span[@class="shopping_cart_badge"]')).toHaveText(2)

await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
await page.locator('//div[@id="shopping_cart_container"]').click()
await expect(page.locator('//span[text()="Your Cart"]')).toBeVisible(2)
await expect(page.locator('//div[text()="Sauce Labs Backpack"]')).toHaveText("Sauce Labs Backpack")
await expect(page.locator('data-test="inventory-item-price"')).toHaveText(29.99)
await expect(page.locator('//div[text()="Sauce Labs Backpack"]')).toHaveText("Sauce Labs Bike Light")
await expect(page.locator('//div[@data-test="inventory-item-price"]')).toHaveText(9.99)
await page.locator('//button[@id="checkout"]').click()

await page.locator('//input[@aria-label="First Name"]').fill(jagathesh)
await page.locator('//input[@aria-label="Last Name"]').fill(sankar)
await page.locator('//input[@id="postal-code"]').fill(600020)
await page.locator('//input[@id="continue"]').click()
await expect (page.locator('//span[text()="Checkout: Overview"]')).toBeVisible("Checkout: Overview")
await expect(page.locator('//div[text()="Payment Information:"]')).toBeChecked()
await expect(page.locator('//div[text()="Shipping Information:"]')).toBeChecked()
await expect(page.locator('//div[text()="data-test="total-label"]')).toBeChecked()

await expect(page.locator('//span[text()="Checkout: Complete!"]')).toBeChecked()
await expect(page.locator('//img[@class="pony_express"]')).toBeVisible()
await expect(page.locator('//h2[text()="Thank you for your order!"]')).toContainText("Thank you for")
await page.locator('//button[text()="Back Home"]').click()
await expect (page.locator('//span[text()="Products"]')).toHaveText("Products")

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
await page.locator('//img[@alt="Open Menu"]').click()
await page.locator('//a[text()="Logout"]').click()
await expect(page).toHaveURL("https://www.saucedemo.com/")
// await page.pause()
})