/// <reference types="cypress"/>

describe("Validating Login Form", () => {

    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/project-2")
    })
  
    it("Test Case 01", () => {
      const inputBoxNames = [ "Please enter your username", "Please enter your password" ]
  
      cy.get("form label").each(($el, index) => {
        cy.wrap($el).should("have.text", inputBoxNames[index])
      })
  
      cy.get("form input").each(($el) => {
        cy.wrap($el).should("be.visible")
        .and("not.have.attr", "required")
      })
  
      const submitLabels = [ "LOGIN", "Forgot Password?"]
      
      cy.get("form > div:nth-child(4)").children().each(($el, index) => {
        cy.wrap($el).should("be.visible")
        .and("not.be.disabled")
        .and("have.text", submitLabels[index])
      })
    })
  
  
    it("Test Case 02 + 03", () => {
      const loginCreds = [ "TechGlobal", "Test1234" ]
  
      cy.get("form input").each(($el, index) => {
        cy.wrap($el).type(loginCreds[index])
      })
  
      cy.get("#login_btn").click()
      
      cy.get("#success_lgn").should("have.text", "You are logged in")
      .next()
      .should("have.text", "LOGOUT")
      .click()
  
      cy.get("#username").should("exist")
  
    })
  
  
    it("Test Case 04 + 05 + 06", () => {
      cy.get("form a").click()
  
      cy.get(".modal").should("exist")
      .find("#modal_title").and("have.text", "Reset Password")
      .next().and("be.visible")
  
       cy.get("[for='email'").should("have.text", "Enter your email address and we'll send you a link to reset your password. ")
       .next().next().should("be.visible").type("johndoe@gmail.com")
  
       cy.get("#submit").should("be.visible").and("be.enabled").and("have.text", "SUBMIT").click()
       cy.get("#confirmation_message").should("have.text", "A link to reset your password has been sent to your email address.")
  
       cy.get(".delete").click()
       cy.get(".modal").should("not.exist")
    })
  
  
    it("Test Case 07", () => {
      cy.get("#login_btn").click()
      cy.get("#error_message").should("have.text", "Invalid Username entered!")
    })
  
  
    it("Test Case 08", () => {
      const loginCreds = [ "John", "Test1234" ]
  
      cy.get("form input").each(($el, index) => {
        cy.wrap($el).type(loginCreds[index])
      })
  
      cy.get("#login_btn").click()
  
      cy.get("#error_message").should("have.text", "Invalid Username entered!")
    })
  
    
    it("Test Case 09", () => {
      const loginCreds = [ "TechGlobal", "1234" ]
  
      cy.get("form input").each(($el, index) => {
        cy.wrap($el).type(loginCreds[index])
      })
  
      cy.get("#login_btn").click()
  
      cy.get("#error_message").should("have.text", "Invalid Password entered!")
    })
  
  
    it("Test Case 10", () => {
      const loginCreds = [ "John", "1234" ]
  
      cy.get("form input").each(($el, index) => {
        cy.wrap($el).type(loginCreds[index])
      })
  
      cy.get("#login_btn").click()
  
      cy.get("#error_message").should("have.text", "Invalid Username entered!")
    })
    
  })