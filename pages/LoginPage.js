const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.getByLabel("username");
    this.passwordInput = page.getByLabel("password");
    this.signInBtn = page.getByRole("button", { name: "Sign In" });
    this.loginErrorMessage = page.locator("#message");
  }
}

module.exports = { LoginPage };
