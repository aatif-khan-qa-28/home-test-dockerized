const { expect } = require("@playwright/test");
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
    await expect(this.searchPage.searchResult).toHaveText(
      `Found one result for ${searchTerm}`
    );
  }
  async verifyEmptySearch() {
    await expect(this.searchPage.searchResult).toHaveText("Please provide a search word.");
  }
}

module.exports = { SearchPageSteps };
