/// <reference types="cypress" />
/*
test case - 01
*/
describe('Contact Us Information Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should have the correct heading', () => {
  
        cy.get('.is-size-3').as('header').should('have.text', 'Contact Us');
        const expectTexts = ['2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150']
        cy.get('@header').nextAll().each((ele, index) => { 
        cy.wrap(ele).should('have.text', expectTexts[index])

        })
       
    });
});

/*
test case - 02
*/

describe('Valitade the Full name input box', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the Full name input box', () => {

        cy.get('form > :nth-child(1) > .label').parent().find('input').should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your full name')
        .and('have.attr', 'required')
        cy.get('[for="name"]').should('have.text', 'Full name *') 
    })

});


/*
test case - 03
*/

describe('Validte the Gender radio button ', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it.only('should validate the Gender radio button ', () => {
        cy.contains('Gender *').should('have.text', 'Gender *')

        const exptedTexts = ['Male', 'Female', 'Prefer not to disclose']

        cy.get('.radio > input').first().should('have.attr', 'required')

        cy.get('.radio > input').each((ele, index) => {
            cy.wrap(ele).parent().should('have.text', exptedTexts[index])
            cy.wrap(ele).should('not.be.selected').and('be.enabled')
        })
            });
        });


/*
tests case -04
*/

describe('Address Input Box Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the Address input box', () => {

        cy.get('div:nth-child(3) label:nth-child(1)').should('not.have.attr', 'required');
        cy.get(':nth-child(3) > .control > .input').should('be.visible');
        cy.get('input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address');
      
    });
});

/*
/*
tests case -05
*/


describe('Email Input Box Validation', () => {
    before(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });
   const testCases = [
    {
        discreption: "Adress input box",
        label: "Address",
        placeholder: "Enter your address",
        required:false
    },
    {
        discreption: "Email input box",
        label: "Email",
        placeholder: "Enter your email",
        required: true
    },
    {
        discreption: "Phone input box",
        label: "Phone",
        placeholder: "Enter your phone number",
        required:false
    },
    {
        discreption: "Email input box",
        label: "Email",
        placeholder: "Enter your Email",
        required:false
    },
   ]

   testCases.forEach(test =>){

    it('test case - ')
   }
        
    });
});

/*
tests case -06
*/

describe('Phone Input Box Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the Phone input box', () => {

        cy.get('input[placeholder="Enter your phone number"]').should('be.visible');
        cy.get('input[placeholder="Enter your phone number"]').should('not.have.attr', 'required');
        cy.get('div:nth-child(5) label:nth-child(1)').should('have.text', 'Phone');
        cy.get('input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number');
    
    });
});

/*
tests case -07
*/

describe('Message Text Area Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the Message text area', () => {
        cy.get('textarea[placeholder="Type your message here..."]').should('be.visible');
        cy.get('textarea[placeholder="Type your message here..."]').should('not.have.attr', 'required');
        cy.get('div:nth-child(6) label:nth-child(1)').should('have.text', 'Message');
        cy.get('textarea[placeholder="Type your message here..."]')
        .should('have.attr', 'placeholder', 'Type your message here...');


    });
});

/*
tests case -08
*/

describe('Consent Checkbox Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the Consent checkbox', () => {
        cy.get('label').contains('I give my consent to be contacted.').should('exist');
        cy.get('input[type="checkbox"]').should('have.attr', 'required');
        cy.get('input[type="checkbox"]').should('be.visible').and('not.be.checked').click().should('be.checked');
        cy.get('input[type="checkbox"]').click().should('not.be.checked');
    });
});


/*
tests case -09
*/

describe('SUBMIT Button Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('should validate the SUBMIT button', () => {
     
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').should('not.be.disabled');
        cy.get('button[type="submit"]').should('have.text', 'SUBMIT');
    });
});

/*
tests case -10
*/

describe('Consent Checkbox Validation', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('should validate the Consent checkbox and handle exceptions', () => {
     
        cy.get('input[placeholder="Enter your full name"]').type('David');
        cy.get('label[class="radio"]').click();
        cy.get('input[placeholder="Enter your address"]').type('123 Main St');
        cy.get('input[placeholder="Enter your email"]').type('david@example.com');
        cy.get('input[placeholder="Enter your phone number"]').type('555-555-5555');
        cy.get('textarea[placeholder="Type your message here..."]').type('This is a test message.');
        cy.get('.checkbox input[type="checkbox"]').as('consentCheckbox')
          .should('be.visible').and('not.be.checked').click()
          .should('be.checked');
        cy.get('.checkbox').click().should('not.be.checked');
    });
});


it("iFrame Test Case", () => {
    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .within(() => {
          cy.get("#first_name").type("John");
          cy.get("#last_name").type("Doe"); }); })