import Project3Page  from "../Pages/Project03POM";



/*describe("Project 3", () => {
    const project3Page = new Project3Page();
  
    beforeEach(() => {
      project3Page.visit("https://techglobal-training.com/frontend/project-3");
    });
  
    it("Validate the elements on the page", () => {
        project3Page.validateOneWayButton();
        project3Page.validateRoundTripButton();
      project3Page.validateCabinClass();
      project3Page.validateFrom();
      project3Page.validateTo();
      project3Page.validateDepart();
      project3Page.validateReturn();
      project3Page.validateNumberOfPassengers();
      project3Page.validatePassenger1();
      project3Page.validateBookButton();
    });


    it("Validate Round Trip selection and elements on the page", () => {
        // Click on the “Round trip” radio button and validate it is selected
        project3Page.getRoundTripRadioButton().click().should("be.checked");
    
        // Validate that the “One way” radio button is not selected
        project3Page.getOneWayRadioButton().should("not.be.checked");
    
        // Validate that the “Cabin Class” label and dropdown are displayed
        project3Page.validateCabinClass();
    
        // Validate that the “From” label and dropdown are displayed
        project3Page.validateFrom();
    
        // Validate that the “To” label and dropdown are displayed
        project3Page.validateTo();
    
        // Validate that the “Depart” label and date picker is displayed
        project3Page.validateDepart();
    
        // Validate that the “Return” label and date picker is displayed
        project3Page.getReturnLabel().should("be.visible");
        project3Page.getReturnDatePicker().should("be.visible");
    
        // Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
        project3Page.validateNumberOfPassengers();
    
        // Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
        project3Page.validatePassenger1();
    
        // Validate that the “BOOK” button is displayed and enabled
        project3Page.validateBookButton();
      });
    });*/

    describe("Project 3", () => {
        const project3Page = new Project3Page();
      
        beforeEach(() => {
            project3Page.visit("https://techglobal-training.com/frontend/project-3");
        });
      
        it("Validate the elements on the page", () => {
   
          project3Page.getOneWayRadioButton()
          .should('be.visible')
          .and('not.be.disabled')
          
          project3Page.getRoundTripRadioButton()
          .should("be.visible")
          .and("not.be.checked");

          project3Page.getCabinClassLabel().should("be.visible");
          project3Page.getCabinClassDropdown().should("be.visible");
      
          project3Page.getFromLabel().should("be.visible");
          project3Page.getFromDropdown().should("be.visible");

          project3Page.getToLabel().should("be.visible");
          project3Page.getToDropdown().should("be.visible");

          project3Page.getDepartLabel().should("be.visible");
          project3Page.getDepartDatePicker().should("be.visible");
      
          project3Page.getReturnLabel().should("be.visible");
          project3Page.getReturnDatePicker().should("be.visible").and("be.disabled");
      
          project3Page.getNumberOfPassengersLabel().should("be.visible");
          project3Page.getNumberOfPassengersDropdown().should("be.visible").and("have.value", "1");

          project3Page.getPassenger1Label().should("be.visible");
          project3Page.getPassenger1Dropdown().should("be.visible").and("have.value", "Adult (16-64)");
      
          project3Page.getBookButton().should("be.visible").and("be.enabled");
        });


        it("Validate Round Trip selection and elements on the page", () => {
 
            project3Page.getRoundTripRadioButton().should("be.visible")
            .click({ force: true })
            .invoke('prop', 'checked')
          
            project3Page.getOneWayRadioButton().should("not.be.checked");
        
            project3Page.getCabinClassLabel().should("be.visible");
            project3Page.getCabinClassDropdown().should("be.visible");
        
            project3Page.getFromLabel().should("be.visible");
            project3Page.getFromDropdown().should("be.visible");
        
            project3Page.getToLabel().should("be.visible");
            project3Page.getToDropdown().should("be.visible");
        
            project3Page.getDepartLabel().should("be.visible");
            project3Page.getDepartDatePicker().should("be.visible");
        

            project3Page.getReturnLabel().should("be.visible");
            project3Page.getReturnDatePicker().should("be.visible");
        
 
            project3Page.getNumberOfPassengersLabel().should("be.visible");
            project3Page.getNumberOfPassengersDropdown().should("be.visible").and("have.value", "1");
       
            project3Page.getPassenger1Label().should("be.visible");
            project3Page.getPassenger1Dropdown().should("be.visible").and("have.value", "Adult (16-64)");
   
            project3Page.getBookButton().should("be.visible").and("be.enabled");
          });

it('should book a one-way flight and validate the booking information', () => {

    project3Page.getOneWayRadioButton().click();
    project3Page.getCabinClassDropdown().select('Business');
    project3Page.getFromDropdown().select('Illinois');
    project3Page.getToDropdown().select('Florida');

    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    const formattedDate =  nextWeek.toISOString().split('T')[0];
    project3Page.getDepartDatePicker().type(formattedDate);

    project3Page.getNumberOfPassengersDropdown().select('1');
    project3Page.getPassenger1Dropdown().select('Senior (65+)');
    project3Page.getBookButton().click();

    cy.get('.ml-3').within(() => {
    
    cy.contains('DEPART').should('be.visible');
    cy.contains('IL to FL').should('be.visible');
    cy.contains('Thu Nov 12 202420').should('be.visible');
    cy.contains('Passenger 1: Senior (65+)').should('be.visible');
    cy.contains('Cabin class: Business').should('be.visible'); });
})
it('should book a round trip flight and validate the booking information', () => {
   
    project3Page.getRoundTripRadioButton().click();
    project3Page.getCabinClassDropdown().select('First');
    project3Page.getFromDropdown().select('California');
    project3Page.getToDropdown().select('Illinois');

    const departDate = new Date();
    departDate.setDate(departDate.getDate() + 7);
    const formattedDepartDate = departDate.toISOString().split('T')[0];
    project3Page.getDepartDatePicker().type(formattedDepartDate);

    const returnDate = new Date();
    returnDate.setMonth(returnDate.getMonth() + 1);
    const formattedReturnDate = returnDate.toISOString().split('T')[0];
    project3Page.getReturnDatePicker().type(formattedReturnDate);

    project3Page.getNumberOfPassengersDropdown().select('1');
    project3Page.getPassenger1Dropdown().select('Adult (16-64)');
    project3Page.getBookButton().click();
    cy.get('.ml-3').within(() => {
      cy.contains('DEPART').should('be.visible');
      cy.contains('CA to IL').should('be.visible');
      cy.contains('Number of Passengers: 1').should('be.visible');
      cy.contains('Passenger 1: Adult (16-64)').should('be.visible');
      cy.contains('Cabin class: First').should('be.visible');
      cy.contains('RETURN').should('be.visible');
      cy.contains('IL to CA').should('be.visible');});
  });

  it('should book a one-way flight for 2 passengers and validate the booking information', () => {

    project3Page.getOneWayRadioButton().click();
    project3Page.getCabinClassDropdown().select('Premium Economy');
    project3Page.getFromDropdown().select('New York');
    project3Page.getToDropdown().select('Texas');
    const departDate = new Date();
    departDate.setDate(departDate.getDate() + 1);
    const formattedDepartDate = departDate.toISOString().split('T')[0];
    project3Page.getDepartDatePicker().type(formattedDepartDate);
    project3Page.getNumberOfPassengersDropdown().select('2');
    project3Page.getPassenger1Dropdown().select('Adult (16-64)');
    project3Page.getPassenger2Dropdown().select('Child (2-11)');
    project3Page.getBookButton().click();
    cy.get('.ml-3').within(() => {
      cy.contains('DEPART').should('be.visible');
      cy.contains('NY to TX').should('be.visible');
      cy.contains('Number of Passengers: 2').should('be.visible');
      cy.contains('Passenger 1: Adult (16-64)').should('be.visible');
      cy.contains('Passenger 2: Child (2-11)').should('be.visible');
      cy.contains('Cabin class: Premium Economy').should('be.visible');
    });
  });



      });



  


 
