const { expect } = require("@playwright/test");
const formdata = JSON.parse(
  JSON.stringify(require("../test-data/checkoutFormData.json"))
);
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.fullnameInput = page.getByRole("textbox", { name: "Full Name" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.addressInput = page.getByRole("textbox", { name: "Address" });
    this.cityInput = page.getByRole("textbox", { name: "City" });
    this.stateInput = page.getByRole("textbox", { name: "State" });
    this.zipInput = page.getByRole("textbox", { name: "Zip" });
    this.sameAdrCheckbox = page.getByText("Shipping address same as");
    this.checkoutButton = page.getByRole("button", {
      name: "Continue to checkout",
    });
    this.nameOnCardInput = page.getByRole("textbox", { name: "Name on Card" });
    this.creditCardNumberInput = page.getByRole("textbox", {
      name: "Credit card Number",
    });
    this.cardExpMonth = page.getByLabel("Exp Month");
    this.cardExpYear = page.getByRole("textbox", { name: "Exp Year" });
    this.cardCVVInput = page.getByRole("textbox", { name: "CVV" });
    this.cartPrices = page.locator(".container p .price");
  }

}

module.exports = { CheckoutPage };
