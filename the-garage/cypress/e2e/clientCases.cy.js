/* eslint-disable no-undef */
describe('Client cases', () => {
  it('Buy products', () => {
    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'clientProfile.json',
    }).as('profile');
    cy.intercept('GET', '/api/v1/productos?limit=10&offset=0', {
      fixture: 'productsList.json',
    }).as('getProducts10');
    cy.intercept('GET', '/api/v1/productos?limit=100&offset=0', {
      fixture: 'productsList.json',
    }).as('getProducts100');

    cy.signInClient('client@example.com', 'Client123');
    cy.get('[data-cy="nav-Productos"]').click();

    cy.get('[data-cy="btn-add-to-cart"]').first().click();
    cy.contains('Producto Agregado').should('be.visible');
    cy.get('[data-cy="btn-add-to-cart"]').last().click();
    cy.get('[data-cy="btn-cart"]').click();
    cy.contains('Carrito de Compras').should('be.visible');

    cy.intercept('GET', '/api/v1/orden_productos/ordenid', {
      fixture: 'orderResponse.json',
    }).as('purchaseDetails');
    cy.intercept('GET', '/api/v1/productos/producto1', {
      fixture: 'orderProduct1.json',
    }).as('getProduct1');
    cy.intercept('GET', '/api/v1/productos/producto2', {
      fixture: 'orderProduct2.json',
    }).as('getProduct2');

    cy.get('.element-list > .card-body').children().should('have.length', 2);
    cy.visit('/purchaseDetails?status=approved&&external_reference=ordenid');
    cy.contains('Compra exitosa').should('be.visible');
  });

  it('Cancel order', () => {
    cy.intercept('GET', '/api/v1/orden_productos', {
      fixture: 'myOrders.json',
    }).as('getMyOrders');
    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'clientProfile.json',
    }).as('profile');
    cy.intercept('PUT', '/api/v1/orden_productos/orden1', {
      fixture: 'orderCancelled.json',
    }).as('updateOrder');

    cy.signInClient('client@example.com', 'Client123');

    cy.get(`[data-cy="orders"]`).click();

    cy.get(`[data-cy="show-order"]`).first().click();
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    cy.get(`[data-cy="messageForm"]`).type('I want to cancel this order');
    cy.get(`[data-cy="sendMessage"]`).click();
    cy.wait('@updateOrder');
    cy.get(`.btn-close`).click();
    cy.contains('Cancelada');
  });

  it('Review an product', () => {
    cy.intercept('GET', '/api/v1/orden_productos', {
      fixture: 'myDeliveredOrder.json',
    }).as('getMyDeliveredOrder');
    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'clientProfile.json',
    }).as('profile');
    cy.intercept('POST', 'api/v1/orden_productos/valoraciones', {
      fixture: 'emptyReviews.json',
    }).as('getEmptyReviews');
    cy.intercept('POST', '/api/v1/productos/producto1/valoraciones/', {
      statusCode: 201,
      fixture: 'itemReviewResponse.json',
    }).as('getItemReview');

    cy.signInClient('client@example.com', 'Client123');

    cy.get(`[data-cy="orders"]`).click();
    cy.get(`[data-cy="show-order"]`).first().click();
    cy.get(`[data-cy="btn-review"]`).click();
    cy.get(`[data-cy="star-rating"]`).first().as('rating1');
    cy.get('@rating1').last().click();
    cy.get(`[data-cy="comments"]`).first().type('This is a review');
    cy.get(`[data-cy="btn-review-item"]`).first().as('reviewButton');
    cy.get('@reviewButton').click();
    cy.wait('@getItemReview');
    cy.get('@reviewButton').should('have.length', 1);
  });
});
