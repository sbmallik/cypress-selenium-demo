/// <reference types="Cypress" />

// New visual test
describe('A simple demo', () => {
  before(() => {
    cy.visit('/');
  });
  beforeEach(() => {
    cy.eyesOpen();
  });
  afterEach(() => {
    cy.eyesClose();
  });
  it('Applitools visual grid', () => {
    cy.get('#log-in').click()
    cy.eyesCheckWindow({
      tag: 'App window',
      target: 'window',
      fully: true
    });
  });
});
