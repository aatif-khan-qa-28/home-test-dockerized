const { expect } = require("allure-playwright");
const { BasePage } = require("../pages/BasePage")
const AssertText = JSON.parse(
    JSON.stringify(require("../test-data/AssertTexts.json"))
  );
class BasePageSteps{
    constructor(page){
        this.page = page
        this.basePage = new BasePage(page);
        this.baseURL = process.env.BASE_URL || "http://localhost:3100";
    }

    async navigate(){
        await this.page.goto("");
    }
    async verifyLoginLink(){
        expect(await this.basePage.loginLink).toBeVisible()
        await this.basePage.loginLink.click()
    }
}
module.exports = {BasePageSteps}