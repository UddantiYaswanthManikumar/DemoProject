let{test, expect } = require('@playwright/test');
test('HomePage',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    let pageTitle = page.title();
    console.log('page title is:', pageTitle);
    await expect(page).toHaveTitle('STORE');
    await page.close();





})
