/// <reference types="Cypress" />
  
describe('Article oEmbeds', () => {
  before(() => {
    cy.visit('/story/news/2001/01/01/article-name/1/?gnt-test-article=text-short,pos4-infogram&gnt-test-alert=breaking&gnt-test-navpromo&gnt-hostname-override=www.usatoday.com#gnt-disable-x&gnt-disable-taboola')
      .get('.gnt_em_ifg')
      .scrollIntoView();
  });
  beforeEach(() => {
    cy.eyesOpen();
  });
  afterEach(() => {
    cy.eyesClose();
  });
  it('Infogram', () => {
    const iframeSelector = '.gnt_em_ifg_if';
    /*
    const getIframeBody = () => {
      return cy
      .get(iframeSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
    };
    getIframeBody()
      */
    cy.getIframeBody(iframeSelector)
      .find('.igc-root', {timeout: 9000}).should('be.visible')
      .wait(3000)
      .eyesCheckWindow({
      target: 'region',
      selector: {
        type: 'css',
        selector: '.gnt_em_ifg'
      }
    });
  });
});