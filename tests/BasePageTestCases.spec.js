const { BasePageSteps } = require("../test-steps/BasePageSteps");
const { OrderPageSteps } = require("../test-steps/OrderPageSteps");
const {test} = require("@playwright/test")

test.describe("BasePage Tests",() => {
    let basePageSteps;

    test.beforeEach(async ({page}) => {
        basePageSteps = new BasePageSteps(page);
        await basePageSteps.navigate();
        console.log(`Running ${test.info().title}`);
        
    });

    test.afterEach(async ({page}) => {
        await page.close()
        console.log(`Closed page after running ${test.info().title}`);        
    });

    test("TC - Verify the base url page", async() =>{
        await basePageSteps.verifyLoginLink();
    })
})