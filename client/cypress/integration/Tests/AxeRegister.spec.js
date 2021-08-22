/// <reference types="cypress" />
describe('Accessibility tests for the RegisterPage', () => {
    beforeEach(() => {
      cy
      .visit('register');
      cy
      .injectAxe();
  
    });
    it(" 1️⃣ should test for any issues in Register", () => {
      cy
      .checkA11y(
        null,{includedImpacts: ['critical','serious','moderate']});  
    });
    it(" 2️⃣ should test the form in Register", () => {
      cy
      .checkA11y(
        'form',{includedImpacts: ['critical','serious']});
    });
  })
