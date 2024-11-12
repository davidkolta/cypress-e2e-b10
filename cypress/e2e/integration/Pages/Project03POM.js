class Project3Page {
  /**
   * Locators
   */
  // One way radio button
  getOneWayRadioButton() {
    return cy.get('.radio.ml-0');
  }

  // Round trip radio button
  getRoundTripRadioButton() {
    return cy.get('.is-flex > :nth-child(2)');
  }

  // Cabin class label
  getCabinClassLabel() {
    return cy.contains("label", "Cabin Class");
  }

  // Cabin class dropdown
  getCabinClassDropdown() {
    return cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > select:nth-child(1)");
  }

  // From label
  getFromLabel() {
    return cy.contains("label", "From");
  }

  // From dropdown
  getFromDropdown() {
    return cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > select:nth-child(1)");
  }

  // To label
  getToLabel() {
    return cy.contains("label", "To");
  }

  // To dropdown
  getToDropdown() {
    return cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(1)");
  }

  // Depart label
  getDepartLabel() {
    return cy.contains("label", "Depart");
  }

  // Depart date picker
  getDepartDatePicker() {
    return cy.get(":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input");
  }

  // Return label
  getReturnLabel() {
    return cy.contains("label", "Return");
  }

  // Return date picker
  getReturnDatePicker() {
    return cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)");
  }

  // Number of passengers label
  getNumberOfPassengersLabel() {
    return cy.contains("label", "Number of passengers");
  }

  // Number of passengers dropdown
  getNumberOfPassengersDropdown() {
    return cy.get(':nth-child(7) > .select > select');
  }

  // Passenger 1 label
  getPassenger1Label() {
    return cy.contains("label", "Passenger 1");
  }

  // Passenger 1 dropdown
  getPassenger1Dropdown() {
    return cy.get(':nth-child(8) > .select > select');
  }

  getPassenger2Dropdown() {
    return cy.get(':nth-child(9) > .select > select');
  }

  // Book button
  getBookButton() {
    return cy.get('button[type="submit"]');
  }

  // Method to visit the page
  visit() {
    cy.visit("https://techglobal-training.com/frontend/project-3");
  }
}

  /**
   * Methods
   */
  /* visit() {
    cy.visit("https://techglobal-training.com/frontend/project-3");
  }

  // Validates the one way button is visible, enabled, and checked
  validateOneWayButton() {
    cy.log("Validating One Way Radio Button");
    this.getOneWayRadioButton()
      .should("be.visible")
  }
  // Validate round trip button
  validateRoundTripButton() {
    cy.log("Validating Round Trip Radio Button");
    this.getRoundTripRadioButton()
      .should("be.visible")
      .and("not.be.checked");
  }
  // Validate cabin class
  validateCabinClass() {
    this.getCabinClassLabel().should("be.visible");
    this.getCabinClassDropdown().should("be.visible");
  }

  // Validate from
  validateFrom() {
    this.getFromLabel().should("be.visible");
    this.getFromDropdown().should("be.visible");
  }

  // Validate to
  validateTo() {
    this.getToLabel().should("be.visible");
    this.getToDropdown().should("be.visible");
  }

  // Validate depart
  validateDepart() {
    this.getDepartLabel().should("be.visible");
    this.getDepartDatePicker().should("be.visible");
  }

  // Validate return
  validateReturn() {
    this.getReturnLabel().should("be.visible");
    this.getReturnDatePicker().should("be.visible").and("be.disabled");
  }

  // Validate number of passengers
  validateNumberOfPassengers() {
    this.getNumberOfPassengersLabel().should("be.visible");
    this.getNumberOfPassengersDropdown().should("be.visible").and("have.value", "1");
  }

  // Validate passenger 1
  validatePassenger1() {
    this.getPassenger1Label().should("be.visible");
    this.getPassenger1Dropdown().should("be.visible").and("have.value", "Adult (16-64)");
  }

  // Validate book button
  validateBookButton() {
    this.getBookButton().should("be.visible").and("be.enabled");
  }*/

export default Project3Page;

