const{test,expect}=require('@playwright/test')
test('table',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')
    const table = await page.locator('//*[@id="productTable"]')
   const columns=await table.locator('thead tr th')
   console.log('Number of columns:', await columns.count())
    expect(await columns.count()).toBe(4)

   const rows=await page.locator('tbody tr')
console.log('Number of rows:',await rows.count())
expect(await rows.count()).toBe(5)

const matchedRow= rows.filter({
    has:page.locator('td'),
    hasText:'Product4'


})
await matchedRow.locator('input').check()

await selectProduct(rows,page,'Product1')
await selectProduct(rows,page,'Product3')
await selectProduct(rows,page,'Product5')


await page.waitForTimeout(5000)

     
})
async function selectProduct(rows, page, name)
{
    const matchedRow= rows.filter({
        has:page.locator('td'),
        hasText: name
    
    
    })
    await matchedRow.locator('input').check()

}