const { expect } = require("@playwright/test");
class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search..");
    this.searchButton = page.locator(".example button");
    this.searchResult = page.locator("#result");
  }
}

module.exports = { SearchPage };
