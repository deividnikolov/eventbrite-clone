/// <reference types="cypress" />

const { beforeEach } = require("mocha");

context('Accessibility tests', () => {
  it('should log any issues in /events', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(null,{includedImpacts: ['critical','serious']});  
  });

  it('should log any issues in /login', () => {
    cy.visit('login');
    cy.injectAxe();
    cy.checkA11y();  
  });
  it('should log any issues in /register', () => {
    cy.visit('register');
    cy.injectAxe();
    cy.checkA11y(null,{includedImpacts: ['critical','serious']});
  });
  it('should exclude nav wrapper in /events', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y({ exclude: ['.nav-wrapper']},{includedImpacts: ['critical','serious']});
  });
  it('should exclude nav wrapper in /register', () => {
    cy.visit('register');
    cy.injectAxe();
    cy.checkA11y({ exclude: ['.nav-wrapper']},{includedImpacts: ['critical','serious']});
  });
  it('should exclude nav wrapper in /login', () => {
    cy.visit('login');
    cy.injectAxe();
    cy.checkA11y({ exclude: ['.nav-wrapper']},{includedImpacts: ['critical','serious']});
  });
  it('should test if the image has alternate text in /events', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y('.active > img',{includedImpacts: ['critical','serious']});
  });

  it('should test the form in /login', () => {
    cy.visit('login');
    cy.injectAxe();
    cy.checkA11y('form',{includedImpacts: ['critical','serious']});
  });
  
  it('should test the form in /register', () => {
    cy.visit('register');
    cy.injectAxe();
    cy.checkA11y('form',{includedImpacts: ['critical','serious']});
  });



});
