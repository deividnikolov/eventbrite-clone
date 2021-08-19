/// <reference types="cypress" />
import EventsPage from '../Page-objects/Events-Page';
import LoginPage from '../Page-objects/Login-Page';

describe('Login Tests', () => {
  beforeEach(() => {
    cy
    .visit('login')
    cy
    .viewport(1280, 720);
    cy
    .url()
    .should('include', 'login');

  });
  it('should login with valid credentials', () => {
    LoginPage.login('ash1@gmail.com', 'axe');
    cy
    .contains('Find your next experience')
    .should('be.visible');

  });

  it('should be able to logout', () => {
    LoginPage.login('ash1@gmail.com', 'axe');
    cy
    .wait(1000);
    EventsPage.clickLogoutBtn({force : true});
    cy
    .contains('Sign in with Google')
    .should('be.visible');

  });
  it('should not login with invalid credentials', () => {
    LoginPage.login('ash1@gmail.com', 'axe1');
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text', 
     'Unauthorized!');

  });
  it('should not be able to login using a username', () => {
    LoginPage.login('username', 'axe1');
    LoginPage
    .elements
      .errorMessage()
      .should(
      'have.text',
      'ValidationError: "email" must be a valid email!');
      
  });
  it('should not be able to login with an empty email', () => {
    LoginPage.enterPassword('axe');
    LoginPage.clickLoginButton();
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text',
     'ValidationError: "email" is not allowed to be empty!'
      );
  });
  it('should not be able to login with an empty password', () => {
    LoginPage.enterEmail('ash1@gmail.com')
    LoginPage.clickLoginButton();
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text',
     'ValidationError: "password" is not allowed to be empty!'
    );
});
});
