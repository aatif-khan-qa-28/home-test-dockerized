const { test, expect } = require("@playwright/test");
const { PageObjectManager } = require("../pages/PageObjectManager");
const { setupBeforeEach } = require("../helpers/testSetup");

setupBeforeEach();

test("TC4 - Checkout Form Order Success", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const checkoutPage = pom.getCheckoutPage(page);
  const orderPage = pom.getOrderPage(page);

  await checkoutPage.navigate();
  await checkoutPage.fillCheckoutPage();
  await checkoutPage.verifyCheckBoxToCheckmark();
  await checkoutPage.submitCheckoutForm();
  await orderPage.verifyOrderConfirmationNumber();
});

test("TC5 - Checkout Form Alert ", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const checkoutPage = pom.getCheckoutPage(page);
  const orderPage = pom.getOrderPage(page);

  await checkoutPage.navigate();
  await checkoutPage.fillCheckoutPage();
  await checkoutPage.verifyCheckBoxToUncheck();
  await checkoutPage.submitCheckoutForm();
  await checkoutPage.handleAlertPopUp();
});

test("TC6 - Cart Total Test", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const checkoutPage = pom.getCheckoutPage(page);
  await checkoutPage.navigate();
  await checkoutPage.allProductSum();
});
