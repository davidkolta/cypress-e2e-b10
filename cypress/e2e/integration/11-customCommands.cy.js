/// <reference types="cypress"/>


describe("File Download & File Upload", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("HTML Elements");
    });
  
    it('Parent Command', () => {
      /* Parent Commands */
      // cy.get()
      // cy.url()
      // cy.title()
      // cy.visit()
      // cy.window()
      // cy.on()
  
      cy.selectDropdownOption('#company_dropdown1', 'Apple')
  
      cy.login('randomEmail@gmail.com', 'TechGlobal')
    })
  
    it('Child Command', () => {
      /* Child Commands */
      // cy.should()
      // cy.find()
      // all the action commands
  
      cy.get('#main_heading').logText()
  
      cy.get('#main_heading').then((subject) => {
        const text = subject.text()
        cy.log(text)
      })
  
      cy.get('#main_heading').haveText('HTML Elements')
    })
  })