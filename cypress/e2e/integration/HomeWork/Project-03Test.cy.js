import FlightBookingPage  from "../Pages/Project-03Test";


describe('Flight Booking Page Validation', () => {
  before(() => {
    FlightBookingPage.visit();
  });

  it('should validate all elements on the flight booking page', () => {
    FlightBookingPage.validateRadioButton('oneWayRadio', true);
    FlightBookingPage.validateRadioButton('roundTripRadio', false);
    FlightBookingPage.validateLabelAndDropdown('cabinClassLabel', 'cabinClassDropdown');
    FlightBookingPage.validateLabelAndDropdown('fromLabel', 'fromDropdown');
    FlightBookingPage.validateLabelAndDropdown('toLabel', 'toDropdown');
    FlightBookingPage.validateDatePicker('departLabel', 'departDatePicker');
    FlightBookingPage.validateDatePicker('returnLabel', 'returnDatePicker', false);
    FlightBookingPage.validateLabelAndDropdown('passengersLabel', 'passengersDropdown', '1');
    FlightBookingPage.validateLabelAndDropdown('passenger1Label', 'passenger1Dropdown', 'Adult (16-64)');
    FlightBookingPage.validateBookButton();
  });

  it('should validate round trip booking elements', () => {
    // Click on the "Round trip" radio button and validate it is selected
    FlightBookingPage.clickRadioButton('roundTripRadio');
    FlightBookingPage.validateRadioButton('roundTripRadio', true);

    // Validate that the "One way" radio button is not selected
    FlightBookingPage.validateRadioButton('oneWayRadio', false);

    // Validate Cabin Class
    FlightBookingPage.validateLabelAndDropdown('cabinClassLabel', 'cabinClassDropdown');

    // Validate From
    FlightBookingPage.validateLabelAndDropdown('fromLabel', 'fromDropdown');

    // Validate To
    FlightBookingPage.validateLabelAndDropdown('toLabel', 'toDropdown');

    // Validate Depart
    FlightBookingPage.validateDatePicker('departLabel', 'departDatePicker');

    // Validate Return
    FlightBookingPage.validateDatePicker('returnLabel', 'returnDatePicker');

    // Validate Number of passengers
    FlightBookingPage.validateLabelAndDropdown('passengersLabel', 'passengersDropdown', '1');

    // Validate Passenger 1
    FlightBookingPage.validateLabelAndDropdown('passenger1Label', 'passenger1Dropdown', 'Adult (16-64)');

    // Validate BOOK button
    FlightBookingPage.validateBookButton();
  });
});