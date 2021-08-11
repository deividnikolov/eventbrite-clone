/// <reference types="cypress" />
it('should navigate to base page', () => {
  cy.visit(Cypress
    .env('baseUrl'));
  cy.wait(500);
  cy.get('.brand-logo')
  .should('be.visible');
});

it('should navigate to register page', () => {
  cy.visit(Cypress
    .env('registerUrl'));
  cy.get('.btn')
  .should('be.visible');
});

it('should navigate to login page', () => {
  cy.visit(Cypress 
    .env('loginUrl'));
  cy.wait(500);
  cy.get('[type="button"]')
  .should('be.visible');
});
