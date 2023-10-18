/* eslint-disable no-undef */
describe('Test Home page', () => {
  it('Charge home page', () => {
    cy.visit('/');

    cy.contains('¿Cómo funciona?');
    cy.contains('¿Quiénes somos?');
    cy.get(`[aria-label="login-button"]`).should('be.visible');
    cy.get('.nav-pills').children().first().and('have.text', 'Inicio');
  });
  it('Charge companies and reviews', () => {
    cy.visit('/');
    cy.intercept('GET', '/api/v1/perfil/empresas', {
      fixture: 'companies.json',
    });
    cy.intercept('GET', '/api/v1/valoraciones?orderBy=fecha_creacion', {
      fixture: 'reviews.json',
    });
    cy.contains('Empresas');
    cy.get(`[data-cy="company-container"]`).children().should('have.length', 2);
    cy.contains('Comentarios');
    cy.get(`[data-cy="review-item"]`).children().should('have.length', 2);
  });
});
