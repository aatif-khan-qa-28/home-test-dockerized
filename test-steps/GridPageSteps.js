const { expect } = require("@playwright/test");
const { GridPage } = require("../pages/GridPage");
const AssertWith = JSON.parse(
  JSON.stringify(require("../test-data/AssertTexts.json"))
);
class GridPageSteps {
  constructor(page) {
    this.page = page;
    this.gridPage = new GridPage(page)
  }

  async navigate() {
    await this.page.goto("/grid");
  }

  async verifyGridProduct() {
    const productAtPosition7 = this.gridPage.productList.nth(6);
    const productName = await productAtPosition7.locator("h4").textContent();
    expect(productName).toBe(AssertWith.GridPage.productName);
    const productPrice = await productAtPosition7.locator("p").textContent();
    expect(productPrice).toBe("$10");
  }

  async verifyAllItemsAreNonNull() {
    const count = await this.gridPage.productList.count();

    for (let i = 0; i < count; i++) {
      const title = await this.gridPage.productList.nth(i).locator("h4").innerText();
      expect(title.trim()).not.toBe("");

      const price = await this.gridPage.productList.nth(i).locator("p").innerText();
      expect(price.trim()).not.toBe("");

      const image = await this.gridPage.productList.nth(i).locator("img");
      const imageSrc = await image.getAttribute("src");
      expect(imageSrc).not.toBeNull();
      expect(imageSrc.trim()).not.toBe("");
      
      const button = await this.gridPage.productList.nth(i).locator("button");
      const buttonText = await button.innerText();
      expect(buttonText.trim()).not.toBe("");
    }
  }
}

module.exports = { GridPageSteps };
