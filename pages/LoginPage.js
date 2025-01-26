const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.getByLabel("username");
    this.passwordInput = page.getByLabel("password");
    this.signInBtn = page.getByRole("button", { name: "Sign In" });
    this.loginErrorMessage = page.locator("#message");
    
  }

  async navigate() {
    await this.page.goto("/login");
  }

  async login(username, password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }

  async verifyWrongCredentialErrorMessage() {
    await expect(this.loginErrorMessage).toContainText("Wrong credentials");
  }
// Fields can not be empty
async verifyFieldEmptyErrorMessage() {
  await expect(this.loginErrorMessage).toContainText("Fields can not be empty");
}
}

module.exports = { LoginPage };
