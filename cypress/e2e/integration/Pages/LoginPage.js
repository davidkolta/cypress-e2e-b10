class LoginPage {

    /* Locators */
    getUserNameField() {
      return cy.get("#username")
    }
  
    getPasswordField() {
      return cy.get("#password")
    }
  
    getSubmitButton() {
      return cy.get("#login_btn")
    }
  
    getSuccessMessage() {
      return cy.get("#success_lgn")
    }
  
  
    /* Methods */
  
    clickLoginButton() {
      this.getSubmitButton().click()
    }
  
    userLogin(username, password) {
      this.getUserNameField().type(username)
      this.getPasswordField().type(password)
      this.clickLoginButton()
    }
  }
  
  export default LoginPage
  
  // const locators = Object.freeze({
  //   main_heading: '#main_heading',
  //   username: '#username'
  // })
  
  // locators = locators