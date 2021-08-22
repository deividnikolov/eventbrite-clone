/// <reference types="cypress" />
describe('Accessibility tests for the LoginPage', () => {
    beforeEach(() => {
      cy
      .visit('login');
      cy
      .injectAxe();
    });
    it(' 1️⃣ should test for any issues in Login ', () => {
      cy
      .checkA11y(
          null,{includedImpacts: ['critical','serious','moderate']});  
    });
    it(' 2️⃣ should test the form in Login', () => {
      cy
      .checkA11y(
        'form',{includedImpacts: ['critical','serious']});
    });
});
