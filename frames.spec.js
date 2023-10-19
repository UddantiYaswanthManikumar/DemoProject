const {test,expect}=require('@playwright/test')
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allframes = await page.frames()
    console.log("total no of frames:",allframes.length)

    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame.fill('//*[@id="id1"]/div/input','hello')

})