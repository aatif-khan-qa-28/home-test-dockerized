const { expect } = require("@playwright/test");
const AssertText = JSON.parse(
  JSON.stringify(require("../test-data/AssertTexts.json"))
);
const{SearchPage} = require("../pages/SearchPage")
class SearchPageSteps {
  constructor(page) {
    this.page = page;
    this.searchPage = new SearchPage(page)
  }

  async navigate() {
    await this.page.goto("/search");
  }

  async search(searchTerm) {
    await this.searchPage.searchInput.fill(searchTerm);
    await this.searchPage.searchButton.click();
  }

  async verifySuccessSearch(searchTerm) {
    await expect(await this.searchPage.searchResult).toHaveText(AssertText.SearchPage.successSearchMsg + `${searchTerm}`)
  }
  async verifyEmptySearch() {
    await expect(this.searchPage.searchResult).toHaveText(AssertText.SearchPage.emptySearchErrorMsg);
  }
}

module.exports = { SearchPageSteps };
