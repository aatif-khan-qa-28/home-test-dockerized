const { test, expect } = require("@playwright/test");
const { PageObjectManager } = require("../pages/PageObjectManager");
const { setupBeforeEach } = require("../helpers/testSetup");

setupBeforeEach();

test("TC7 - Grid Item Test", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const gridPage = pom.getGridPage(page);
  await gridPage.navigate();
  await gridPage.verifyGridProduct();
  await page.pause();
});

test("TC8 - Grid All Items Test", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const gridPage = pom.getGridPage(page);
  await gridPage.navigate();
  await gridPage.verifyAllItemsAreNonNull();
  await page.pause();
});
