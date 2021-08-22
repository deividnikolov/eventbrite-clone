/// <reference types="cypress" />
describe('Accessibility tests for the EventsPage', () => {
  beforeEach(() => {
    cy
    .visit('/');
    cy
    .injectAxe();
  });

  it(' 1️⃣ should test for any issues in Events', () => {
    cy
    .checkA11y(
        null,{includedImpacts: ['critical','serious','moderate']});  
  });
  it(' 2️⃣ should test the navigation wrapper', () => {
    cy
    .checkA11y(
        '.nav-wrapper',{ includedImpacts: ['critical', 'serious']});
  });

  it(' 3️⃣ should test if the image has alternate text', () => {
    cy
    .checkA11y(
        '.active > img',{ includedImpacts: ['critical', 'serious']});
  });
  it(' 4️⃣ should test if the search bar has sufficient color constrast', () => {
    cy
    .checkA11y(
        '.searchBarContainer', {
      includedImpacts: ['critical', 'serious']});
  });
  it(' 5️⃣ should test if the event listener has sufficient color constrast', () => {
    cy
    .checkA11y(
        '.eventsListContainer', {
      includedImpacts: ['critical', 'serious', 'moderate']});
  });
  it(' 6️⃣ should test if the login button has sufficient color constrast', () => {
    cy
    .checkA11y(
        '.homePageNavbar > div > :nth-child(1) > [href=""] > a', {
      includedImpacts: ['critical', 'serious', 'moderate']});
  });
  it(' 7️⃣ should test if the register button has sufficient color constrast', () => {
    cy
    .checkA11y(
        '.homePageNavbar > div > :nth-child(2) > [href=""] > a', {
      includedImpacts: ['critical', 'serious', 'moderate']});
  });
  it(' 8️⃣ should test if the search button has sufficient color constrast', () => {
    cy
    .checkA11y(
        '.btn > .material-icons', {
      includedImpacts: ['critical', 'serious', 'moderate']});
      
  });
});
