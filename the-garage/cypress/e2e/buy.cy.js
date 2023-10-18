/* eslint-disable no-undef */
describe('Buy products', () => {
  it('Buy two items of the list', () => {
    cy.signInClient('client@example.com', 'Client123');
  });
});

//cy.fixture('clientSignUp.json').then((client) => {
//   cy.visit('/login');
//   cy.contains('Inicio de Sesión');
//   cy.get('#formBasicEmail');
//   cy.get('input[name="email"]').type(client.email);
//   cy.get('input[name="password"]').type(`${client.password}{enter}`);
//   cy.contains(client.name);
//   cy.get('.nav-pills').children().contains('Productos').click();
//   cy.get('[data-cy="btn-add-to-cart"]').first().click();
//   cy.contains('Producto Agregado').should('be.visible');
//   cy.get('[data-cy="btn-add-to-cart"]').last().click();
//   cy.get('[data-cy="btn-cart"]').click();
//   cy.contains('Carrito de Compras').should('be.visible');
//   cy.get('.element-list > .card-body').children().should('have.length', 2);
//   cy.get('[data-cy="btn-buy"]').click();
// });
