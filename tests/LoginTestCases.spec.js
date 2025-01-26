const { test, expect } = require("@playwright/test");
const { PageObjectManager } = require("../pages/PageObjectManager");
const { setupBeforeEach,setupAfterEach } = require("../helpers/testSetup");
const credentials = JSON.parse(
  JSON.stringify(require("../test-data/credentials.json"))
);

setupBeforeEach();
setupAfterEach();

test("TC1 - Login Success", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.getLoginPage();
  const homePage = pom.getHomePage();

  await loginPage.navigate();
  await loginPage.login(
    credentials.validUser.username,
    credentials.validUser.password
  );
  await homePage.verifyWelcomeMessage();
});

test("TC2 - Login Failure A", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.getLoginPage();
  const homePage = pom.getHomePage();

  await loginPage.navigate();
  await loginPage.login(
    credentials.invalidUser.username,
    credentials.invalidUser.password
  );
  await loginPage.verifyWrongCredentialErrorMessage();
});

test("TC3 - Login Failure B", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.getLoginPage();
  const homePage = pom.getHomePage();

  await loginPage.navigate();
  await loginPage.login("", "");
  await loginPage.verifyFieldEmptyErrorMessage();
});
