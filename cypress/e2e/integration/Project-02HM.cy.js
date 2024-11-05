describe('Login Page Validation', () => {
    beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/project-2')
    })

    /*

    Test case - 01 
Navigate to https://techglobal-training.com/frontend/project-2
Validate that the username input box is displayed
Validate that the username input box is not required
Validate that the label of the username input box is “Please enter your username”
Validate that the password input box is displayed
Validate that the password input box is not required
Validate that the label of the password input box is “Please enter your password”
Validate the “LOGIN” button is displayed
Validate the “LOGIN” button is clickable
Validate that the button text is “LOGIN”
Validate the “Forgot Password?” link is displayed
Validate that the “Forgot Password?” link is clickable
Validate that the link text is “Forgot Password?”


    */
  
    it('validates the login form', () => {

      cy.get('#username')
        .should('be.visible')
        .and('not.have.attr', 'required')
      cy.contains('label', 'Please enter your username')
        .should('be.visible')
  
      cy.get('#password')
        .should('be.visible')
        .and('not.have.attr', 'required')
      cy.contains('label', 'Please enter your password')
        .should('be.visible')
  
      cy.get('button')
        .contains('LOGIN')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'LOGIN')
  
      cy.get("a[href='/frontend/project-2']")
    .contains('Forgot Password?')
    .should('be.visible')
    .and('have.attr', 'href', '/frontend/project-2')
    .and('have.text', 'Forgot Password?');
    })
    // Test case 02 + 03 together 
    /*
Test Case 02 - Validate the valid login
Navigate to https://techglobal-training.com/frontend/project-2
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the success message is displayed as “You are logged in”
Validate the logout button displayed with the text “LOGOUT”

Test Case 03 - Validate the logout
Navigate to https://techglobal-training.com/frontend/project-2
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Click on the “LOGOUT” button
Validate that the login form is displayed

    */
    

    it('login successfully, validate login, then logout and validate form displayed', () => {
   
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.contains('button', 'LOGIN').click()
    
        cy.contains('You are logged in').should('be.visible')
        cy.contains('button', 'LOGOUT')
          .should('be.visible')
          .and('have.text', 'LOGOUT')
        cy.contains('button', 'LOGOUT').click()
    
        cy.get('.is-size-3').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.contains('button', 'LOGIN').should('be.visible')
  
});

//tast - case 04
it('validate the Forgot Password modal elements', () => {

    cy.contains("a[href='/frontend/project-2']", 'Forgot Password?').click()
    cy.get('.modal-card-title').should('be.visible').and('have.text', 'Reset Password')
    cy.get('.modal-card-head .delete').should('be.visible')
    cy.get('.modal-card-body input[type="email"]').should('be.visible')

    cy.get("label[for='email']")
  .should('be.visible')
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.equal("Enter your email address and we'll send you a link to reset your password.")})

    cy.get('#submit')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'SUBMIT')
  })

  /*
  test case - 05
Navigate to https://techglobal-training.com/frontend/project-2
Click on the “Forgot Password?” link
Validate that the “Reset Password” modal is displayed
Click on the close button
Validate that the “Reset Password” modal is closed
  */
it('open and close the Reset Password modal', () => {
   
    cy.contains("a[href='/frontend/project-2']", 'Forgot Password?').click()
    cy.get('#modal_title').should('have.text', 'Reset Password')
    cy.get("button[aria-label='close']").click()
    cy.get('#modal_title').should('not.exist')
  })
  /*
    Test Case 06 - Validate the Reset Password form submission
    Navigate to https://techglobal-training.com/frontend/project-2
    Click on the “Forgot Password?” link
    Enter an email
    Click on the “SUBMIT” button
    Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button
  */

  it('submit the reset password form and validate the success message', () => {

    cy.contains("a[href='/frontend/project-2']", 'Forgot Password?').click()
    cy.get('input[type="email"]').type('test@example.com')
    cy.contains('button', 'SUBMIT').click()
    cy.contains('A link to reset your password has been sent to your email address.')
      .should('be.visible')
      .and('exist')
  })

  /*
  Test Case 07

Navigate to https://techglobal-training.com/frontend/project-2
Leave username empty
Leave password empty
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form
  
/*
 Test Case 08
Navigate to https://techglobal-training.com/frontend/project-2
Enter the username as “John”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form


*/
        const testCases = [
            { 
              name: 'empty credentials', 
              username: '', 
              password: '' 
            },
            { 
              name: 'invalid username', 
              username: 'John', 
              password: 'Test1234' 
            }
          ]

          testCases.forEach((testCase) => {
            it(`display error message for ${testCase.name}`, () => {
              if (testCase.username) {
                cy.get('#username').type(testCase.username)
              }
              if (testCase.password) {
                cy.get('#password').type(testCase.password)
              }
              cy.contains('#login_btn', 'LOGIN').click()
              cy.get('#error_message')
                .should('be.visible')
                .and('have.text', 'Invalid Username entered!')
                .then($errorMessage => {
                  cy.get('form').then($form => {
                    expect($errorMessage.offset().top).to.be.lessThan($form.offset().top)
                  })
                })
            })
        })

        /*

 Test case 09 -
Navigate to https://techglobal-training.com/frontend/project-2
Enter the username as “TechGlobal”
Enter the password as “1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Password entered!” above the form
*/
it('display error message for invalid password', () => {

    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('1234')
    cy.contains('button', 'LOGIN').click()

    cy.get('#error_message')
      .should('be.visible')
      .and('have.text', 'Invalid Password entered!')
      .then($errorMessage => {
        cy.get('form').then($form => {
          expect($errorMessage.offset().top).to.be.lessThan($form.offset().top)
        })
      })
}) 
/*

Test case 10
Navigate to https://techglobal-training.com/frontend/project-2
Enter the username as “John”
Enter the password as “1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form

*/
it('display error message for invalid username and password', () => {

    cy.get('#username').type('John')
    cy.get('#password').type('1234')
    cy.contains('button', 'LOGIN').click()

    cy.get('#error_message')
      .should('be.visible')
      .and('have.text', 'Invalid Username entered!')
      .then($errorMessage => {
        cy.get('form').then($form => {
          expect($errorMessage.offset().top).to.be.lessThan($form.offset().top)
        })
      })
    })

})


  





 