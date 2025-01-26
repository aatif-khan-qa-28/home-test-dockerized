const { expect } = require("@playwright/test");
class OrderPage {
  constructor(page) {
    this.page = page;
    this.confirmationText = page.getByRole("heading", {
      name: "Order Confirmed!",
    });
    this.orderNumberText = page.getByText("Order Number:");
  }

  async navigate() {
    await this.page.goto("/order");
  }
  async verifyOrderConfirmationNumber() {
    await this.confirmationText.waitFor({ state: "visible" });
    await expect(this.confirmationText).toBeVisible();
    const orderText = await this.orderNumberText.textContent();
    const orderNumber = orderText.replace("Order Number:", "").trim();
    expect(orderNumber).not.toBeNull();
  }
}

module.exports = { OrderPage };
