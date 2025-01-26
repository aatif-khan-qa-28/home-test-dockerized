const { expect } = require("@playwright/test");
class GridPage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator(".grid-container .item");
  }

  async navigate() {
    await this.page.goto("/grid");
  }

  async verifyGridProduct() {
    const productAtPosition7 = this.productList.nth(6);
    const productName = await productAtPosition7.locator("h4").textContent();
    expect(productName).toBe("Super Pepperoni");
    const productPrice = await productAtPosition7.locator("p").textContent();
    expect(productPrice).toBe("$10");
  }

  async verifyAllItemsAreNonNull() {
    const count = await this.productList.count();

    for (let i = 0; i < count; i++) {
      const title = await this.productList.nth(i).locator("h4").innerText();
      expect(title.trim()).not.toBe("");

      const price = await this.productList.nth(i).locator("p").innerText();
      expect(price.trim()).not.toBe("");

      const image = await this.productList.nth(i).locator("img");
      const imageSrc = await image.getAttribute("src");
      expect(imageSrc).not.toBeNull();
      expect(imageSrc.trim()).not.toBe("");
      
      const button = await this.productList.nth(i).locator("button");
      const buttonText = await button.innerText();
      expect(buttonText.trim()).not.toBe("");
    }
  }
}

module.exports = { GridPage };
