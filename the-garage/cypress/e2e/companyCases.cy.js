/* eslint-disable no-undef */
describe('Company cases', () => {
  it('Add products', () => {
    cy.intercept('GET', '/api/v1/productos/misProductos?limit=100&offset=0', {
      fixture: 'myProductsEmpty.json',
    }).as('getMyProducts');

    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'companyProfile.json',
    }).as('profile');

    cy.signInCompany('company@example.com', 'Company123');
    cy.get(`[data-cy="products"]`).click();
    cy.get(`[data-cy="add-product"]`).should('be.visible');
    cy.get(`[data-cy="add-product"]`).click();

    cy.fixture('product1.json').then((product) => {
      cy.intercept('POST', '/api/v1/productos', {
        fixture: 'product1Response.json',
      }).as('addProduct1');

      cy.intercept('GET', '/api/v1/productos/misProductos?limit=100&offset=0', {
        fixture: 'myProducts1.json',
      }).as('getMyProducts1');

      cy.get('#formBasicProdRef').select(product.category);
      cy.get('input[name="nombre"]').type(product.name);
      cy.get('textarea[name="descripcion"]').type(product.description);
      cy.get('input[name="marca"]').type(product.brand);
      cy.get('#formBasicProdEntrega').select(product.delivery);
      cy.get('textarea[name="ficha_tecnica"]').type(product.technical_sheet);
      cy.get('input[name="precio"]').type(product.price);
      cy.get('input[name="iva"]').type(product.iva);
      cy.get('input[name="images"]').selectFile(
        'cypress/fixtures/images/freno_disco.jpg',
      );
      cy.get('input[name="cantidad_disponible"]').type(
        `${product.quantity}{enter}`,
      );

      cy.contains(product.name);
    });

    cy.get(`[data-cy="add-product"]`).should('be.visible');
    cy.get(`[data-cy="add-product"]`).click();

    cy.fixture('product2.json').then((product) => {
      cy.intercept('POST', '/api/v1/productos', {
        fixture: 'product2Response.json',
      }).as('addProduct2');

      cy.intercept('GET', '/api/v1/productos/misProductos?limit=100&offset=0', {
        fixture: 'myProducts2.json',
      }).as('getMyProducts2');

      cy.get('#formBasicProdRef').select(product.category);
      cy.get('input[name="nombre"]').type(product.name);
      cy.get('textarea[name="descripcion"]').type(product.description);
      cy.get('input[name="marca"]').type(product.brand);
      cy.get('#formBasicProdEntrega').select(product.delivery);
      cy.get('textarea[name="ficha_tecnica"]').type(product.technical_sheet);
      cy.get('input[name="precio"]').type(product.price);
      cy.get('input[name="iva"]').type(product.iva);
      cy.get('input[name="images"]').selectFile(
        'cypress/fixtures/images/transmision.jpg',
      );
      cy.get('input[name="cantidad_disponible"]').type(
        `${product.quantity}{enter}`,
      );

      cy.contains(product.name);
    });
  });

  it('Cancel order', () => {
    cy.intercept('GET', '/api/v1/orden_productos', {
      fixture: 'myOrders.json',
    }).as('getMyOrders');

    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'companyProfile.json',
    }).as('profile');

    cy.intercept('PUT', '/api/v1/orden_productos/orden1', {
      fixture: 'orderCancelled.json',
    }).as('updateOrder');

    cy.signInCompany('company@example.com', 'Company123');

    cy.get(`[data-cy="orders"]`).click();

    cy.get(`[data-cy="show-order"]`).first().click();
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(2)').click();
    cy.get(`[data-cy="messageForm"]`).type('I want to cancel this order');
    cy.get(`[data-cy="sendMessage"]`).click();
    cy.wait('@updateOrder');
    cy.get(`.btn-close`).click();
    cy.contains('Cancelada');
  });

  it('Send order', () => {
    cy.intercept('GET', '/api/v1/orden_productos', {
      fixture: 'myOrders.json',
    }).as('getMyOrders');

    cy.intercept('GET', '/api/v1/perfil', {
      fixture: 'companyProfile.json',
    }).as('profile');

    cy.intercept('PUT', '/api/v1/orden_productos/orden1', {
      fixture: 'orderSended.json',
    }).as('updateOrder');

    cy.signInCompany('company@example.com', 'Company123');

    cy.get(`[data-cy="orders"]`).click();

    cy.get(`[data-cy="show-order"]`).first().click();
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    cy.get(`[data-cy="messageForm"]`).type('I send this order');
    cy.get(`[data-cy="sendMessage"]`).click();
    cy.wait('@updateOrder');
    cy.get(`.btn-close`).click();
    cy.contains('Enviada');

    cy.intercept('PUT', '/api/v1/orden_productos/orden1', {
      fixture: 'orderDelivered.json',
    }).as('updateOrder2');

    cy.get(`[data-cy="delivered"]`).click();
    cy.wait('@updateOrder2');
    cy.contains('Entregada');
  });
});
