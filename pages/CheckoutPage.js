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

  async navigate() {
    await this.page.goto("/checkout");
  }

  async fillCheckoutPage() {
    await this.fullnameInput.waitFor({ state: "visible" });
    await this.fullnameInput.fill(formdata.fullname);
    await this.emailInput.waitFor({ state: "visible" });
    await this.emailInput.fill(formdata.email);
    await this.addressInput.fill(formdata.address);
    await this.cityInput.fill(formdata.city);
    await this.stateInput.fill(formdata.state);
    await this.zipInput.fill(formdata.zip);
    await this.nameOnCardInput.fill(formdata.nmOnCard);
    await this.creditCardNumberInput.fill(formdata.cardNumber);
    await this.cardExpMonth.selectOption(formdata.expiryMonthCC);
    await this.cardExpYear.fill(formdata.expiryYearCC);
    await this.cardCVVInput.fill(formdata.cvvNumber);
  }

  async verifyCheckBoxToCheckmark() {
    const isChecked = await this.sameAdrCheckbox.isChecked();

    if (!isChecked) {
      await this.sameAdrCheckbox.check();
    }
    await expect(this.sameAdrCheckbox).toBeChecked();
  }

  async verifyCheckBoxToUncheck() {
    const isChecked = await this.sameAdrCheckbox.isChecked();
    if (isChecked) {
      console.log(
        '"Shipping address same as billing" checkbox is checked. Unchecking it.'
      );

     
      await this.sameAdrCheckbox.uncheck();

      
      expect(await this.sameAdrCheckbox.isChecked()).toBe(false);
    }
  }

  async submitCheckoutForm() {
    await this.checkoutButton.click();
  }

  async handleAlertPopUp() {
    let aleartMessage = null;
    await this.page.on("dialog", (dialog) => console.log(dialog.message()));
    await this.page.on("dialog", async (dialog) => {
      aleartMessage = dialog.message();
      console.log("Alert message:", aleartMessage);
      await dialog.accept();
    });

    await expect(this.checkoutButton).toBeVisible();
    await expect(this.checkoutButton).toBeEnabled();
  }

  async allProductSum() {
    const prices = await this.cartPrices.allInnerTexts();
    const floatPrices = prices.map((price) =>
      parseFloat(price.replace(/[^0-9.]/g, ""))
    );
    const lastItemPrice = floatPrices[floatPrices.length - 1];
    const calculatedTotal = floatPrices
      .slice(0, -1)
      .reduce((sum, price) => sum + price, 0);
    expect(calculatedTotal).toBeCloseTo(lastItemPrice, 2);
  }
}

module.exports = { CheckoutPage };
