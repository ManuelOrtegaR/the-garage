/* eslint-disable no-undef */
describe('Sign In', () => {
  it('Sign in with correct data', () => {
    cy.intercept('POST', '/api/v1/auth/signin', {
      fixture: 'signInResponse.json',
    }).as('signIn');
    cy.intercept('GET', '/api/v1/perfil/empresas', {
      fixture: 'companies.json',
    }).as('getCompanies');
    cy.intercept('GET', '/api/v1/valoraciones?orderBy=fecha_creacion', {
      fixture: 'reviews.json',
    }).as('getReviews');

    cy.visit('/login');
    cy.contains('Inicio de Sesión');
    cy.get('#formBasicEmail');
    cy.get('input[name="email"]').type('client@example.com');
    cy.get('input[name="password"]').type('Client123{enter}');
    cy.contains('Manuel Ortega');
    cy.get('.nav-link').click();
    cy.get(`[aria-label="logout"]`).click();
    cy.get(`[aria-label="login-button"]`).should('be.visible');
  });

  it('Sign in with incorrect data', () => {
    cy.intercept('POST', '/api/v1/auth/signin', {
      statusCode: 403,
      fixture: 'signInError.json',
    }).as('signInError');

    cy.visit('/login');
    cy.contains('Inicio de Sesión');
    cy.get('#formBasicEmail');
    cy.get('input[name="email"]').type('incorrect@example.com');
    cy.get('input[name="password"]').type('Client123{enter}');
    cy.contains('Correo o contraseña invalidos');
  });

  it('Sign in with an bloqued or unnactive account', () => {
    cy.intercept('POST', '/api/v1/auth/signin', {
      statusCode: 403,
      fixture: 'signInBloqued.json',
    }).as('signInBloqued');

    cy.visit('/login');
    cy.contains('Inicio de Sesión');
    cy.get('#formBasicEmail');
    cy.get('input[name="email"]').type('incorrect@example.com');
    cy.get('input[name="password"]').type('Client123{enter}');
    cy.contains('Usuario no activo o bloqueado');
  });
});
