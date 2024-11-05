/// <reference types="cypress"/>

describe("Class_practice01", () => {
  beforeEach(() => {
      cy.visit("https://www.google.com/");
  });

  it('Validate the Google Home Page Title and URL', () => {
      cy.title().should('eq', 'Google')
      cy.url().should('eq', 'https://www.google.com/')
  });
  it('Validate the Google Logo Presence', () => {
      cy.title().should('eq', 'Google')
      cy.url().should('eq', 'https://www.google.com/')
      cy.get('#hplogo img').should('be.visible');
  });
  it('Validate the Google Search Results', () => {
      cy.get('#APjFqb').type('Cypress{enter}');
      cy.get('.dURPMd > div').should('have.length.gte', 0)

      cy.on('uncaught:exception', () => {
          return false
        });
  });
  it('Validate the Google Search Autocomplete Suggestions', () => {

      cy.visit('https://www.google.com/');
      cy.get('#APjFqb').type('Artificial Intelligence');
      cy.get('[data-view-type="1"]').should('have.length.gte', 1)
      cy.get('[data-view-type="1"]').first().click();
      cy.url().should('include', 'q=artificial+intelligence');

      cy.on('uncaught:exception', () => {
          return false
        });
  });
  cy.on('uncaught:exception', () => {
      return false
    });
});