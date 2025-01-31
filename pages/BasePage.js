class BasePage{
    constructor(page){
        this.page = page
        this.loginLink = page.getByRole('link',{name:"Login Page"})
    }

}
module.exports = {BasePage}