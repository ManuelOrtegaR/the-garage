/* eslint-disable no-undef */
describe('Home', () => {
  it('Charge home page', () => {
    cy.visit('/');

    cy.contains('¿Cómo funciona?');
    cy.contains('¿Quiénes somos?');
    cy.get(`[aria-label="login-button"]`).should('be.visible');
    cy.get('.nav-pills')
      .children()
      .first()
      .should('have.class', 'active')
      .and('have.text', 'Inicio');
  });
});
