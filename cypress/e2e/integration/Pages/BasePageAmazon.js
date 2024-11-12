class BasePageAmazon {
    /* locators */
    getLogo() {
        return cy.get('#nav-logo-sprites');
    }

    getLocationSection() {
        return cy.get('#nav-global-location-popover-link');
    }

    getDropdown() {
        return cy.get('#searchDropdownBox');
    }

    getSearchBox() {
        return cy.get('#twotabsearchtextbox');
    }

    getSearchIcon() {
        return cy.get('#nav-search-submit-button');
    }

    getLanguageDropdown() {
        return cy.get('#icp-nav-flyout');
    }

    getHelloSection() {
        return cy.get('#nav-link-accountList');
    }
    getSearchDropdown() {
        return cy.get('#nav-search-dropdown-card');
    }

    getReturnAndOrders() {
        return cy.get('#nav-orders');
    }

    getCart() {
        return cy.get('#nav-cart');
    }

    getFooter() {
        return cy.get('#navFooter');
    }

    getFooterHeadings() {
        return cy.get('#navFooterColHead');
    }
    /* methods */
}
