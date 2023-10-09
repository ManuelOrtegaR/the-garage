/* eslint-disable no-undef */
describe('Client signup', () => {
  it('Sign up with correct data', () => {
    cy.visit('/');
    cy.get(`[aria-label="login-button"]`).should('be.visible');
    cy.get(`[aria-label="login-button"]`).click();
    cy.get(`[data-cy="signup"]`).click();
    cy.fixture('clientSignUp.json').then((client) => {
      cy.get('button[name="signup_client"]').click();
      cy.get('input[name="name"]').type(client.name);
      cy.get('select[name="department"]').select(client.department);
      cy.get('select[name="city"]').select(client.city);
      cy.get('input[name="address"]').type(client.address);
      cy.get('input[name="profile_photo"]').selectFile(
        'cypress/fixtures/images/profile_photo.jpeg',
      );
      cy.get('select[name="document_type"]').select(client.document_type);
      cy.get('input[name="document_number"]').type(client.document_number);
      cy.get('input[name="phone_number"]').type(client.phone_number);
      cy.get('input[name="email"]').type(client.email);
      cy.get('input[name="password"]').type(client.password);
      cy.get('input[name="cpassword"]').type(`${client.password}{enter}`);
      cy.wait(10000);
      cy.request('POST', 'http://localhost:3000/api/v1/auth/testactivation', {
        correo: client.email,
      }).then((response) => {
        expect(response.body).to.have.property('activation_url');
        cy.visit(response.body.activation_url);
      });
      cy.wait(5000);
      cy.visit('/login');
      cy.contains('Inicio de Sesión');
      cy.get('#formBasicEmail');
      cy.get('input[name="email"]').type(client.email);
      cy.get('input[name="password"]').type(`${client.password}{enter}`);
      cy.contains(client.name);
      cy.get('.nav-link').click();
      cy.get(`[aria-label="logout"]`).click();
      cy.get(`[aria-label="login-button"]`).should('be.visible');
    });
  });
});
