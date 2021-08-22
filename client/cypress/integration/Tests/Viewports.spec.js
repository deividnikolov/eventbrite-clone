/// <reference types="cypress" />

const phoneModels = [
  'iphone-4',
  'iphone-5',
  'iphone-6',
  'iphone-7',
  'iphone-8',
  'iphone-x',
  'iphone-xr',
  'iphone-se2',
  'samsung-note9',
  'samsung-s10',
];
describe('Eventy Logo On Mobile', () => {
  phoneModels.forEach((model) => {
    it(`Should display Eventy Logo on ${model} screen`, () => {
      cy
      .viewport(model);
      cy
      .visit('/');
      cy
      .injectAxe();
      cy
      .checkA11y(
        '.brand-logo',
        {includedImpacts: ['critical','serious','moderate']}); // brand logo must have sufficient color contrast
      cy
      .get('.brand-logo').should('be.visible');
    });
  });

  const macVersions = [
    'macbook-11',
    'macbook-13',
    'macbook-15',
    'macbook-16',
  ];
  describe('Eventy Logo On Desktop', () => {
    macVersions.forEach((version) => {
      it(`Should display logo on  ${version}`, () => {
        cy
        .viewport(version);
        cy
        .get('.brand-logo')
        .should('be.visible');

      });
    });
  });
});
