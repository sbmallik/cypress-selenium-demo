/// <reference types="Cypress" />

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
    cy.wait(3000)
      .eyesCheckWindow({
      tag: 'App window',
      target: 'window',
      fully: true
    });
  });
});