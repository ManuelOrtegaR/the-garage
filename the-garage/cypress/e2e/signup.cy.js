/* eslint-disable no-undef */
describe('Sign Up', () => {
  it('Sign Up Client with correct data', () => {
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento',
      {
        fixture: 'departments.json',
      },
    ).as('getDepartments');
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=C%C3%B3rdoba',
      {
        fixture: 'cities.json',
      },
    ).as('getCities');
    cy.intercept('POST', '/api/v1/auth/cliente/signup', {
      statusCode: 201,
      body: {
        message:
          'Usuario creado satisfactoriamente, revisa tu correo para confirmar tu cuenta',
      },
    }).as('clientSignUp');
    cy.intercept('POST', '/api/v1/auth/confirmacion/token', {
      statusCode: 201,
      body: {
        message: 'Autenticacion correcta',
      },
    }).as('confirmToken');

    cy.visit('/login');
    cy.get(`[data-cy="signup"]`).click();
    cy.get('button[name="signup_client"]').click();
    cy.fixture('clientSignUp.json').then((client) => {
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
    });
    cy.wait('@clientSignUp');
    cy.contains('Se ha enviado un correo electrónico para confirmar su cuenta');
    cy.visit('/activacion/token');
    cy.contains('Activación de la cuenta');
    cy.contains('Tu cuenta ha sido activada');
  });

  it('Sign Up Client with incorrect data', () => {
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento',
      {
        fixture: 'departments.json',
      },
    ).as('getDepartments');
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=C%C3%B3rdoba',
      {
        fixture: 'cities.json',
      },
    ).as('getCities');
    cy.intercept('POST', '/api/v1/auth/cliente/signup', {
      statusCode: 400,
      body: {
        error: {
          message:
            'No se pudo crear el usuario, el correo, documento o nit ya se encuentra registrado en el sistema',
          status: 400,
        },
      },
    }).as('clientSignUp');

    cy.visit('/login');
    cy.get(`[data-cy="signup"]`).click();
    cy.get('button[name="signup_client"]').click();
    cy.fixture('clientSignUp.json').then((client) => {
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
    });
    cy.wait('@clientSignUp');
    cy.contains('No se ha podido crear el usuario');
    cy.contains(
      'No se pudo crear el usuario, el correo, documento o nit ya se encuentra registrado en el sistema',
    );
  });

  it('Sign Up Company with correct data', () => {
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento',
      {
        fixture: 'departments.json',
      },
    ).as('getDepartments');
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=C%C3%B3rdoba',
      {
        fixture: 'cities.json',
      },
    ).as('getCities');
    cy.intercept('POST', '/api/v1/auth/empresa/signup', {
      statusCode: 201,
      body: {
        message:
          'Usuario creado satisfactoriamente, espera a que un administrador confirme tu cuenta',
      },
    }).as('companySignUp');
    cy.intercept('POST', '/api/v1/auth/confirmacion/token', {
      statusCode: 201,
      body: {
        message: 'Autenticacion correcta',
      },
    }).as('confirmToken');

    cy.visit('/login');
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
    });
    cy.wait('@companySignUp');
    cy.contains('Se ha enviado un correo electrónico para confirmar su cuenta');
    cy.visit('/activacion/token');
    cy.contains('Activación de la cuenta');
    cy.contains('Tu cuenta ha sido activada');
  });

  it('Sign Up Company with incorrect data', () => {
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento',
      {
        fixture: 'departments.json',
      },
    ).as('getDepartments');
    cy.intercept(
      'GET',
      'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=C%C3%B3rdoba',
      {
        fixture: 'cities.json',
      },
    ).as('getCities');
    cy.intercept('POST', '/api/v1/auth/empresa/signup', {
      statusCode: 400,
      body: {
        error: {
          message:
            'No se pudo crear el usuario, el correo, documento o nit ya se encuentra registrado en el sistema',
          status: 400,
        },
      },
    }).as('companySignUp');

    cy.visit('/login');
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
    });
    cy.wait('@companySignUp');
    cy.contains('No se ha podido crear el usuario');
    cy.contains(
      'No se pudo crear el usuario, el correo, documento o nit ya se encuentra registrado en el sistema',
    );
  });
});

// cy.visit('/login');
// cy.contains('Inicio de Sesión');
// cy.get('#formBasicEmail');
// cy.get('input[name="email"]').type(company.email);
// cy.get('input[name="password"]').type(`${company.password}{enter}`);
// cy.contains(company.name);

// cy.get(`[aria-label="logout"]`).click();
// cy.get(`[aria-label="login-button"]`).should('be.visible');
