const {test, expect} = require('@playwright/test')
test('Locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
     await page.click("id=login2")
     await page.fill('//*[@id="loginusername"]','pavanol')
     await page.fill('//*[@id="loginpassword"]','test@123')
     await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
     await page.close()
npx 



})
