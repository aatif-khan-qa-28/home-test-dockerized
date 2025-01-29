const { test } = require("@playwright/test");

const { GridPageSteps } = require("../test-steps/GridPageSteps");

test.describe("Grid Page Tests", () => {
  let gridPageSteps;

  test.beforeEach(async ({ page }) => {
    gridPageSteps = new GridPageSteps(page);
    await gridPageSteps.navigate();
    console.log(`Running ${test.info().title}`);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
    console.log(`Closed page after running ${test.info().title}`);
  });

  test("TC7 - Grid Item Test", async () => {
    await gridPageSteps.verifyGridProduct();
  });

  test("TC8 - Grid All Items Test", async () => {
    await gridPageSteps.verifyAllItemsAreNonNull();
  });
});
