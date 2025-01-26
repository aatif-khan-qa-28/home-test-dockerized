const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
const { CheckoutPage } = require("./CheckoutPage");
const { OrderPage } = require("./OrderPage");
const { GridPage } = require("./GridPage");
const { SearchPage } = require("./SearchPage");
class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.orderPage = new OrderPage(page);
    this.gridPage = new GridPage(page);
    this.searchPage = new SearchPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getHomePage() {
    return this.homePage;
  }

  getOrderPage() {
    return this.orderPage;
  }
  getCheckoutPage() {
    return this.checkoutPage;
  }
  getGridPage(){
    return this.gridPage;
  }
  getSearchPage(){
    return this.searchPage
  }
}

module.exports = { PageObjectManager };
