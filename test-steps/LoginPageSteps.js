const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const AssertWith = JSON.parse(
  JSON.stringify(require("../test-data/AssertTexts.json"))
);
class LoginPageSteps {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async navigate() {
    await this.page.goto("/login");
  }

  async login(username, password) {
    await this.loginPage.userNameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.signInBtn.click();
  }

  async verifyWrongCredentialErrorMessage() {
    await expect(await this.loginPage.loginErrorMessage).toContainText(AssertWith.LoginPage.wrongLoginDetailsError);
  }
  // Fields can not be empty
  async verifyFieldEmptyErrorMessage() {
    await expect(await this.loginPage.loginErrorMessage).toContainText(AssertWith.LoginPage.empltyLoginDetailsError);
  }
}

module.exports = { LoginPageSteps };
