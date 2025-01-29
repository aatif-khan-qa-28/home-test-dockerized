const { expect } = require("@playwright/test");
class GridPage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator(".grid-container .item");
  }
}

module.exports = { GridPage };
