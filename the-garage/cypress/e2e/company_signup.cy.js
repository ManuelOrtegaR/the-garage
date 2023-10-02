/* eslint-disable no-undef */
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get(`[aria-label="login-button"]`).should('be.visible');
    cy.get('.nav-pills')
      .children()
      .first()
      .should('have.class', 'active')
      .and('have.text', 'Inicio');
    cy.get(`[aria-label="login-button"]`).click();
    cy.get(`[data-cy="signup"]`).click();
    cy.get('button[name="signup_company"]').click();
    cy.fixture('companySignUp.json').then((company) => {
      cy.get('input[name="nit"]').type(company.nit);
      cy.get('input[name="name"]').type(company.name);
      cy.get('input[name="address"]').type(company.address);
      cy.get('select[name="department"]').select(company.department);
      cy.get('select[name="city"]').select(company.city);
      cy.get('input[name="phone"]').type(company.phone);
      cy.get('input[name="website"]').type(company.website);
      cy.get('input[name="email"]').type(company.email);
      cy.get('input[name="c_commerce_document"]').selectFile(
        'cypress/fixtures/images/c_commerce.pdf',
      );
      cy.get('input[name="profile_photo"]').selectFile(
        'cypress/fixtures/images/logo.jpg',
      );
      cy.get('input[name="legal_rep_name"]').type(company.legal_rep_name);
      cy.get('select[name="legal_rep_document_type"]').select(
        company.legal_rep_document_type,
      );
      cy.get('input[name="legal_rep_document_number"]').type(
        company.legal_rep_document_number,
      );
      cy.get('input[name="legal_rep_email"]').type(company.legal_rep_email);
      cy.get('textarea[name="description"]').type(company.description);
      cy.get('input[name="password"]').type(company.password);
      cy.get('input[name="cpassword"]').type(`${company.password}{enter}`);
      cy.wait(10000);
      cy.request('POST', 'http://localhost:3000/api/v1/auth/testactivation', {
        correo: company.email,
      }).then((response) => {
        expect(response.body).to.have.property('activation_url');
        cy.visit(response.body.activation_url);
      });
      cy.wait(5000);
      cy.visit('/login');
      cy.contains('Inicio de Sesión');
      cy.get('#formBasicEmail');
      cy.get('input[name="email"]').type(company.email);
      cy.get('input[name="password"]').type(`${company.password}{enter}`);
      cy.contains(company.name);
    });

    cy.get('.nav-link').click();
    cy.get(`[data-cy="products"]`).click();
    cy.get(`[data-cy="add-product"]`).click();

    cy.fixture('product1.json').then((product) => {
      cy.get('input[name="nombre_categoria"]').type(product.category);
      cy.get('input[name="nombre"]').type(product.name);
      cy.get('textarea[name="descripcion"]').type(product.description);
      cy.get('input[name="marca"]').type(product.brand);
      cy.get('input[name="tipo_entrega"]').type(product.delivery);
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
      cy.get('input[name="nombre_categoria"]').type(product.category);
      cy.get('input[name="nombre"]').type(product.name);
      cy.get('textarea[name="descripcion"]').type(product.description);
      cy.get('input[name="marca"]').type(product.brand);
      cy.get('input[name="tipo_entrega"]').type(product.delivery);
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

    cy.get(`[aria-label="logout"]`).click();
    cy.get(`[aria-label="login-button"]`).should('be.visible');
  });
});
