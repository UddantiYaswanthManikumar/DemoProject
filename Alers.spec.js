const{test,expect}=require('@playwright/test')
test('alert',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type().toContain('alert'))
        expect(dialog.message().toContain("I am an alert Box"))
        await dialog.accept();// close by using ok button
        


    })

    await page.click('//*[@id="HTML9"]/div[1]/button[1]')
    await page.waitForTimeout(5000);
})
test('Confirmatin dialog alert',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type().toContain('Confirm'))
        expect(dialog.message().toContain("Press a button!"))
        await dialog.accept();//close by using ok button
        await dialog.dismiss(); // close by using a cancel button


    })

    await page.click('//*[@id="HTML9"]/div[1]/button[2]')
    await expect(page.locator('//*[@id="demo"]'))
    await page.waitForTimeout(5000);


})






