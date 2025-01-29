class OrderPage {
  constructor(page) {
    this.page = page;
    this.confirmationText = page.getByRole("heading", {
      name: "Order Confirmed!",
    });
    this.orderNumberText = page.getByText("Order Number:");
  }
}

module.exports = { OrderPage };
