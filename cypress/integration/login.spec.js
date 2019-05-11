/// <reference types="cypress" />

describe('Login testing', function () {
  it('Shows login forms', function () {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=email]');
    cy.get('[data-cy=password]');
  });
  it('Logs in', function () {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=email]').type('tybo.admin@psygarden.com');
    cy.get('[data-cy=password]').type('P@ssword1');
    cy.get('[data-cy=loginButton]').click();
    cy.contains('tybo.admin@psygarden.com');
  });
});
