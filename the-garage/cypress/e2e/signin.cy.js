/* eslint-disable no-undef */
describe('Sign In', () => {
  it('Sign in with correct data', () => {
    cy.visit('/login');
    cy.contains('Inicio de Sesión');
    cy.get('#formBasicEmail');
    cy.get('input[name="email"]').type('inquisidor-x@hotmail.com');
    cy.get('input[name="password"]').type('Nueva123{enter}');
    cy.contains('Vendedores de cajas');
    cy.get('.nav-link').click();
    cy.get(`[aria-label="logout"]`).click();
    cy.get(`[aria-label="login-button"]`).should('be.visible');
  });
});
