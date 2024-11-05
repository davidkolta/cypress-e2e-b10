
Cypress.Commands.add('clickCard', (link) => {
    cy.contains(".card", link).click();
  })
  
  // /**
  //  * Adds two numbers together.
  //  * 
  //  * @param {number} a - The first number.
  //  * @param {number} b - The second number
  //  * @returns {number} - The sum of the two numbers.
  //  * 
  //  * 
  //  * @example
  //  * // Returns 5
  //  * add(2, 3)
  //  * 
  //  *  * @example
  //  * // Returns 10
  //  * add(7, 3)
  //  */
  // export function add(a, b) {
  //   return a + b;
  // }
  
  // add('tech', 'global')