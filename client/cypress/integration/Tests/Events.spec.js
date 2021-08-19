/// <reference types="cypress" />
import EventsPage from '../Page-objects/Events-Page';
import LoginPage from '../Page-objects/Login-Page';

describe('Events Tests', () => {
    beforeEach(() => {
      cy
      .visit('login')
      cy
      .viewport(1280, 720);
      cy
      .url()
      .should('include', 'login');
      LoginPage
      .login('ash1@gmail.com','axe');
      
    });
    it('should add an event to My Favorites', () => {
      EventsPage.clickAddEvent();
      EventsPage.clickMyFavBtn();
     cy
      .contains('Successfully added!')
      .should('be.visible');
     cy
      .get('img')
      .should('exist');
      EventsPage.clickRemoveEvent();

    });
    it('should remove the event from My Favorites', () => {
      EventsPage.clickAddEvent();
      EventsPage.clickMyFavBtn();
      EventsPage.clickRemoveEvent();
      cy
      .contains('There are no events added to your favorites list!')
      .should('be.visible');

  });

    it('should find an event by City', () => {
     EventsPage.enterEventCity('Chicago');
     EventsPage.clickSearchBtn();
     cy
      .contains('Chicago White Sox vs. New York Yankees')
      .should('be.visible');
    
    });
    it('should find an event by Name', () => {
     EventsPage.enterEventName('Baltimore Ravens')
     EventsPage.clickSearchBtn();
     cy
      .contains('Las Vegas Raiders vs. Baltimore Ravens')
      .should('be.visible');

    });

    it('should not be able to find an event by adding invalid data', () => {
      EventsPage.enterEventName('invalid')
      EventsPage.clickSearchBtn();
      cy
       .contains('No events found!')
       .should('be.visible')
       .and(
       'have.css',
       'color',
       'rgba(0, 0, 0, 0.87)');
  
    });
});
