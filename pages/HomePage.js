const { expect } = require("@playwright/test");

const credentials = JSON.parse(
  JSON.stringify(require("../test-data/credentials.json"))
);
class HomePage {
  constructor(page) {
    this.page = page;
    this.headerDiv = page.locator("#welcome-message");
    this.homePageHeading = page.getByRole("heading", { name: "Welcome!" });
    this.userNameText = page.locator("[data-id='username']");
 
  }

  async navigate() {
    await this.page.goto("/home");
  }

  async verifyWelcomeMessage() {
    await this.homePageHeading.waitFor();
    await expect(this.homePageHeading).toContainText("Welcome!");
    await expect(this.userNameText).toHaveText(credentials.validUser.username);
  }
  

}

module.exports = { HomePage };
