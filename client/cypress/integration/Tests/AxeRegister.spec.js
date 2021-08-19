/// <reference types="cypress" />
describe('Accessibility tests for the RegisterPage', () => {
    beforeEach(() => {
      cy
      .visit('register');
      cy
      .injectAxe();
  
    });
    it('should test for any issues in Register ', () => {
      cy
      .checkA11y(
          null,{includedImpacts: ['critical','serious','moderate']});  
    });
    it('should test the form in Register', () => {
      cy
      .checkA11y(
        'form',{includedImpacts: ['critical','serious']});
    });
    
    




});