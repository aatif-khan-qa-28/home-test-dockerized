const { test } = require("@playwright/test");

const { CheckoutPageSteps } = require("../test-steps/CheckoutPageSteps");
const { OrderPageSteps } = require("../test-steps/OrderPageSteps");

test.describe("Checkout Page Tests", () => {
  let checkoutPageSteps;
  let orderPageSteps;

  test.beforeEach(async ({ page }) => {
    checkoutPageSteps = new CheckoutPageSteps(page);
    orderPageSteps = new OrderPageSteps(page);
    await checkoutPageSteps.navigate();
    console.log(`Running ${test.info().title}`);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
    console.log(`Closed page after running ${test.info().title}`);
  });

  test("TC4 - Checkout Form Order Success", async () => {
    await checkoutPageSteps.fillCheckoutPage();
    await checkoutPageSteps.verifyCheckBoxToCheckmark();
    await checkoutPageSteps.submitCheckoutForm();
    await orderPageSteps.verifyOrderConfirmationNumber();
  });

  test("TC5 - Checkout Form Alert ", async () => {
    await checkoutPageSteps.fillCheckoutPage();
    await checkoutPageSteps.verifyCheckBoxToUncheck();
    await checkoutPageSteps.submitCheckoutForm();
    await checkoutPageSteps.handleAlertPopUp();
  });

  test("TC6 - Cart Total Test", async () => {
    await checkoutPageSteps.navigate();
    await checkoutPageSteps.allProductSum();
  });
});
