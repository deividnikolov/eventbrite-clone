/// <reference types="cypress" />
import RegisterPage from '../Page-objects/Register-Page';
describe('Register',() => {

it('should register with valid credentials', () => {
 cy
  .visit('register')
  RegisterPage.
  register('ash1@gmail.com', 'axe');
 cy
 .contains('Email is already in use!')
 .should('be.visible');

   });
});


