const { test } = require("@playwright/test");

const { LoginPageSteps } = require("../test-steps/LoginPageSteps");
const { HomePageSteps } = require("../test-steps/HomePageSteps");
const loginData = JSON.parse(
  JSON.stringify(require("../test-data/loginData.json"))
);

test.describe("Login Page Tests", () => {
  let loginPageSteps;
  let homePageSteps;

  test.beforeEach(async ({ page }) => {
    loginPageSteps = new LoginPageSteps(page);
    homePageSteps = new HomePageSteps(page);
    await loginPageSteps.navigate();
    console.log(`Running ${test.info().title}`);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
    console.log(`Closed page after running ${test.info().title}`);
  });

  test("TC1 - Login Success", async () => {
    await loginPageSteps.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
    await homePageSteps.verifyWelcomeMessage();
  });
  test("TC2 - Login Failure A", async () => {
    await loginPageSteps.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );
    await loginPageSteps.verifyWrongCredentialErrorMessage();
  });

  test("TC3 - Login Failure B", async ({ page }) => {
    await loginPageSteps.login(
      loginData.blankData.username,
      loginData.blankData.password
    );
    await loginPageSteps.verifyFieldEmptyErrorMessage();
  });
});
