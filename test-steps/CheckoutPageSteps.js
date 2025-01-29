const formdata = JSON.parse(
  JSON.stringify(require("../test-data/checkoutFormData.json"))
);
const { expect } = require("@playwright/test");
const { CheckoutPage } = require("../pages/CheckoutPage");
class CheckoutPageSteps {
  constructor(page) {
    this.page = page;
    this.checkoutPage = new CheckoutPage(page);
  }

  async navigate() {
    await this.page.goto("/checkout");
  }

  async fillCheckoutPage() {
    await this.checkoutPage.fullnameInput.waitFor({ state: "visible" });
    await this.checkoutPage.fullnameInput.fill(formdata.fullname);
    await this.checkoutPage.emailInput.waitFor({ state: "visible" });
    await this.checkoutPage.emailInput.fill(formdata.email);
    await this.checkoutPage.addressInput.fill(formdata.address);
    await this.checkoutPage.cityInput.fill(formdata.city);
    await this.checkoutPage.stateInput.fill(formdata.state);
    await this.checkoutPage.zipInput.fill(formdata.zip);
    await this.checkoutPage.nameOnCardInput.fill(formdata.nmOnCard);
    await this.checkoutPage.creditCardNumberInput.fill(formdata.cardNumber);
    await this.checkoutPage.cardExpMonth.selectOption(formdata.expiryMonthCC);
    await this.checkoutPage.cardExpYear.fill(formdata.expiryYearCC);
    await this.checkoutPage.cardCVVInput.fill(formdata.cvvNumber);
  }

  async verifyCheckBoxToCheckmark() {
    const isChecked = await this.checkoutPage.sameAdrCheckbox.isChecked();

    if (!isChecked) {
      await this.checkoutPage.sameAdrCheckbox.check();
    }
    await expect(this.checkoutPage.sameAdrCheckbox).toBeChecked();
  }

  async verifyCheckBoxToUncheck() {
    const isChecked = await this.checkoutPage.sameAdrCheckbox.isChecked();
    if (isChecked) {
      await this.checkoutPage.sameAdrCheckbox.uncheck();

      expect(await this.checkoutPage.sameAdrCheckbox.isChecked()).toBe(false);
    }
  }

  async submitCheckoutForm() {
    await this.checkoutPage.checkoutButton.click();
  }

  async handleAlertPopUp() {
    let aleartMessage = null;
    await this.page.on("dialog", (dialog) => console.log(dialog.message()));
    await this.page.on("dialog", async (dialog) => {
      aleartMessage = dialog.message();
      await dialog.accept();
    });

    await expect(this.checkoutPage.checkoutButton).toBeVisible();
    await expect(this.checkoutPage.checkoutButton).toBeEnabled();
  }

  async allProductSum() {
    const prices = await this.checkoutPage.cartPrices.allInnerTexts();
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

module.exports = { CheckoutPageSteps };
