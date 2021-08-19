class EventsPage {
  elements = {
    eventName: () => cy.get('[name="name"]'),
    eventCity: () => cy.get('[name="city"]'),
    eventDate: () => cy.get('[name="startDate"]'),
    searchBtn: () =>cy.get('.searchBarForm > .btn > .material-icons'),
    logoutBtn: () => cy.get('.homePageNavbar > div > :nth-child(2) > :nth-child(1) > a'),
    addEvent: () => cy.get(':nth-child(1) > .card-content > :nth-child(1) > .favoriteChip > .btn > .material-icons'),
    removeEvent: () => cy.get(':nth-child(1) > .card-content > :nth-child(1) > .btn > .material-icons'),
    myFavoritesBtn: () => cy.get('.homePageNavbar > div > :nth-child(1) > [href=""] > a'),
  };
  enterEventName(name) {
    this.elements.eventName().type(name);
  }
  enterEventCity(city) {
    this.elements.eventCity().type(city);
  }
  enterEventDate(date) {
    this.elements.enterEventDate().type(date);
  }
  clickSearchBtn() {
    this.elements.searchBtn().click();
  }
  clickLogoutBtn() {
    this.elements.logoutBtn().click();
  }
  clickAddEvent() {
    this.elements.addEvent().click();
  }
  clickMyFavBtn() {
    this.elements.myFavoritesBtn().click();
  }
  clickRemoveEvent() {
    this.elements.removeEvent().click();
  }
}
module.exports = new EventsPage();
