/* eslint-disable no-undef */
describe('Add products', () => {
  it('Add two products', () => {
    cy.intercept('GET', '/api/v1/productos/misProductos?limit=100&offset=0', {
      fixture: 'myProductsEmpty.json',
    }).as('getMyProducts');

    cy.signInCompany('company@example.com', 'Company123');
    cy.get(`[data-cy="products"]`).click();

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
});
