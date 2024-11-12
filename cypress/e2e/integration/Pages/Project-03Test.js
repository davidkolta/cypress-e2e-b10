class FlightBookingPage {
    elements = {
      oneWayRadio: () => cy.get('.ml-0'),
      roundTripRadio: () => cy.get('.is-flex > :nth-child(2)'),
      cabinClassLabel: () => cy.contains('label', 'Cabin Class'),
      cabinClassDropdown: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > select:nth-child(1)"),
      fromLabel: () => cy.contains('label', 'From'),
      fromDropdown: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > select:nth-child(1)"),
      toLabel: () => cy.contains('label', 'To'),
      toDropdown: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(1)"),
      departLabel: () => cy.contains('label', 'Depart'),
      departDatePicker: () => cy.get(":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input"),
      returnLabel: () => cy.contains('label', 'Return'),
      returnDatePicker: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
      passengersLabel: () => cy.contains('label', 'Number of passengers'),
      passengersDropdown: () => cy.get(':nth-child(7) > .select > select'),
      passenger1Label: () => cy.contains('label', 'Passenger 1'),
      passenger1Dropdown: () => cy.get(':nth-child(8) > .select > select'),
      bookButton: () => cy.get('button[type="submit"]')
    };
  
    visit() {
      cy.visit('https://techglobal-training.com/frontend/project-3');
    }
  
    validateRadioButton(radioButton, shouldBeChecked) {
        return this.elements[radioButton]()
          .should('be.visible')
          .and('not.be.disabled')
          .then($el => {
            // Check if the radio button or its parent is clickable
            cy.wrap($el.parent()).should('not.have.css', 'pointer-events', 'none');
            
            // Use 'have.prop' instead of 'be.checked' for more reliable checking
   
          });
      }
  
    validateLabelAndDropdown(label, dropdown, defaultValue = null) {
      this.elements[label]().should('be.visible');
      const dropdownElement = this.elements[dropdown]().should('be.visible');
      if (defaultValue) {
        dropdownElement.should('have.value', defaultValue);
      }
      return dropdownElement;
    }
  
    validateDatePicker(label, datePicker, shouldBeEnabled = true) {
      this.elements[label]().should('be.visible');
      return this.elements[datePicker]()
        .should('be.visible')
        .and(shouldBeEnabled ? 'be.enabled' : 'be.disabled');
    }
  
    validateBookButton() {
      return this.elements.bookButton()
        .should('be.visible')
        .and('be.enabled');
    }
    clickRadioButton(radioButton) {
        this.elements[radioButton]().click();
      }
    
      validateRadioButton(radioButton, shouldBeChecked) {
        this.elements[radioButton]()
          .should('be.visible')
          .and('be.enabled')
          .and(shouldBeChecked ? 'be.checked' : 'not.be.checked');
      }
    
      validateLabelAndDropdown(label, dropdown, defaultValue = null) {
        this.elements[label]().should('be.visible');
        this.elements[dropdown]().should('be.visible');
        if (defaultValue) {
          this.elements[dropdown]().should('have.value', defaultValue);
        }
      }
    
      validateDatePicker(label, datePicker) {
        this.elements[label]().should('be.visible');
        this.elements[datePicker]().should('be.visible').and('be.enabled');
      }
    
      validateBookButton() {
        this.elements.bookButton()
          .should('be.visible')
          .and('be.enabled');
      }
    }
  
  
  export default new FlightBookingPage();