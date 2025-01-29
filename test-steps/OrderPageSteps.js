const { expect } = require("@playwright/test");
const { OrderPage } = require("../pages/OrderPage");
class OrderPageSteps {
  constructor(page) {
    this.page = page;
    this.orderPageSteps = new OrderPage(page);
  }

  async navigate() {
    await this.page.goto("/order");
  }
  async verifyOrderConfirmationNumber() {
    await this.orderPageSteps.confirmationText.waitFor({ state: "visible" });
    await expect(this.orderPageSteps.confirmationText).toBeVisible();
    const orderText = await this.orderPageSteps.orderNumberText.textContent();
    const orderNumber = orderText.replace("Order Number:", "").trim();
    expect(orderNumber).not.toBeNull();
  }
}

module.exports = { OrderPageSteps };
