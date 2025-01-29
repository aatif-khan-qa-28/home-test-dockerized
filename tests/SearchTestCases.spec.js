const { test } = require("@playwright/test");
const { SearchPageSteps } = require("../test-steps/SearchPageSteps");
const searchData = JSON.parse(
  JSON.stringify(require("../test-data/search.json"))
);

test.describe("Search Page Tests", () => {
  let searchPageSteps;

  test.beforeEach(async ({ page }) => {
    searchPageSteps = new SearchPageSteps(page);
    await searchPageSteps.navigate();
    console.log(`Running ${test.info().title}`);
  });
  test.afterEach(async ({ page }) => {
    await page.close();
    console.log(`Closed page after running ${test.info().title}`);
  });

  test("TC9 - Search Success", async () => {
    await searchPageSteps.search(searchData.searchSuccess);
    await searchPageSteps.verifySuccessSearch(searchData.searchSuccess);
  });
  test("TC10 - Search empty", async () => {
    await searchPageSteps.search(searchData.searchEmtpy);
    await searchPageSteps.verifyEmptySearch();
  });
});
