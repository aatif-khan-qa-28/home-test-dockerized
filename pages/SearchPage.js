const { expect } = require("@playwright/test");
class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search..");
    this.searchButton = page.locator(".example button");
    this.searchResult = page.locator("#result");
  }

  async navigate() {
    await this.page.goto("/search");
  }

  async search(searchTerm) {
    await this.searchInput.fill(searchTerm);
    await this.searchButton.click();
  }

  async verifySuccessSearch(searchTerm) {
    await expect(this.searchResult).toHaveText(
      `Found one result for ${searchTerm}`
    );
  }
  async verifyEmptySearch() {
    await expect(this.searchResult).toHaveText("Please provide a search word.");
  }
}

module.exports = { SearchPage };
