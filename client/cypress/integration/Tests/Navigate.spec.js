/// <reference types="cypress" />
it('should navigate to events page', () => {
  cy
    .visit('/')                                                     
  cy
    .url()
    .should('include', 'events')
  cy
    .get('.brand-logo')
    .should('be.visible');
  
});

it('should navigate to register page', () => {
  cy
     .visit('register')
  cy
     .url()
     .should('include', 'register')
  cy
     .get('.btn')
     .should('be.visible');

});

it('should navigate to login page', () => {
  cy
    .visit('login')
  cy
     .url()
     .should('include', 'login')
  cy
    .get('[type="button"]')
    .should('be.visible');

});
