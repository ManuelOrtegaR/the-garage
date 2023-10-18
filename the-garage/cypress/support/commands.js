/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('signInClient', (email, password) => {
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
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(`${password}{enter}`);
  cy.get('.nav-link').click();
});

Cypress.Commands.add('signInCompany', (email, password) => {
  cy.intercept('POST', '/api/v1/auth/signin', {
    fixture: 'signInResponseCompany.json',
  }).as('signIn');
  cy.intercept('GET', '/api/v1/perfil/empresas', {
    fixture: 'companies.json',
  }).as('getCompanies');
  cy.intercept('GET', '/api/v1/valoraciones?orderBy=fecha_creacion', {
    fixture: 'reviews.json',
  }).as('getReviews');

  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(`${password}{enter}`);
  cy.get('.nav-link').click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
