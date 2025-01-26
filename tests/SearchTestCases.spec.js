const { test } = require("@playwright/test");
const { PageObjectManager } = require("../pages/PageObjectManager");
const { setupBeforeEach, setupAfterEach } = require("../helpers/testSetup");

const search = JSON.parse(JSON.stringify(require("../test-data/search.json")));

setupBeforeEach();
setupAfterEach();

test("TC9 - Search Success", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const searchPage = pom.getSearchPage(page);
  await searchPage.navigate();
  await searchPage.search(search.searchSuccess);
  await searchPage.verifySuccessSearch(search.searchSuccess);
});

test("TC10 - Search empty", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const searchPage = pom.getSearchPage(page);
  await searchPage.navigate();
  await searchPage.search(search.searchEmtpy);
  await searchPage.verifyEmptySearch();
});

