const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.headerDiv = page.locator("#welcome-message");
    this.homePageHeading = page.getByRole("heading", { name: "Welcome!" });
    this.userNameText = page.locator("[data-id='username']");
  }
}

module.exports = { HomePage };
