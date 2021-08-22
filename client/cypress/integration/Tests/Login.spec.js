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
  it(' 1️⃣ should login with valid credentials', () => {
    LoginPage.login('ash1@gmail.com', 'axe');
    cy
    .contains('Find your next experience')
    .should('be.visible');

  });

  it(' 2️⃣ should be able to logout', () => {
    LoginPage.login('ash1@gmail.com', 'axe');
    cy
    .wait(1000);
    EventsPage.clickLogoutBtn({force : true});
    cy
    .contains('Sign in with Google')
    .should('be.visible');

  });
  it(' 3️⃣ should not login with invalid credentials', () => {
    LoginPage.login('ash1@gmail.com', 'axe1');
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text', 
     'Unauthorized!' )
     .and(
       'have.css',
        'color', 
       'rgb(255, 82, 82)')

  });
  it(' 4️⃣ should not be able to login using a username', () => {
    LoginPage.login('username', 'axe1');
    LoginPage
    .elements
      .errorMessage()
      .should(
      'have.text',
      'ValidationError: "email" must be a valid email!')
      .and(
        'have.css',
        'color',
        'rgb(255, 82, 82)')
      
  });
  it(' 5️⃣ should not be able to login with an empty email', () => {
    LoginPage.enterPassword('axe');
    LoginPage.clickLoginButton();
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text',
     'ValidationError: "email" is not allowed to be empty!')
     .and(
       'have.css',
       'color',
       'rgb(255, 82, 82)')
  });
  it(' 6️⃣ should not be able to login with an empty password', () => {
    LoginPage.enterEmail('ash1@gmail.com')
    LoginPage.clickLoginButton();
    LoginPage
    .elements
     .errorMessage()
     .should(
     'have.text',
     'ValidationError: "password" is not allowed to be empty!')
     .and(
      'have.css',
      'color',
     'rgb(255, 82, 82)');   
   });
});
