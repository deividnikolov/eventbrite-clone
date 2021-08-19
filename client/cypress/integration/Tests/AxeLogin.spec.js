/// <reference types="cypress" />
describe('Accessibility tests for the LoginPage', () => {
    beforeEach(() => {
      cy
      .visit('login');
      cy
      .injectAxe();
    });
    it('should test for any issues in Login ', () => {
      cy
      .checkA11y(
          null,{includedImpacts: ['critical','serious','moderate']});  
    });
    it('should test the form in Login', () => {
      cy
      .checkA11y(
        'form',{includedImpacts: ['critical','serious']});
    });
    
    




});