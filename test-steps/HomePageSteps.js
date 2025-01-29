const { expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const AssertWith = JSON.parse(
  JSON.stringify(require("../test-data/AssertTexts.json"))
);

const loginData = JSON.parse(
  JSON.stringify(require("../test-data/loginData.json"))
);

class HomePageSteps {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(page);
  }

  async navigate() {
    await this.page.goto("/home");
  }

  async verifyWelcomeMessage() {
    await this.homePage.homePageHeading.waitFor();
    await expect(this.homePage.homePageHeading).toContainText(AssertWith.HomePage.pageHeader);
    await expect(this.homePage.userNameText).toHaveText(loginData.validUser.username);
  }
}

module.exports = { HomePageSteps };
