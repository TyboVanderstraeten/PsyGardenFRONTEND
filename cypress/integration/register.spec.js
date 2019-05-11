/// <reference types="cypress" />

describe('Register testing', function () {
  it('Shows register forms', function () {
    cy.visit('http://localhost:4200/register');
    cy.get('[data-cy=firstname]');
    cy.get('[data-cy=lastname]');
    cy.get('[data-cy=email]');
    cy.get('[data-cy=emailConfirmation]');
    cy.get('[data-cy=password]');
    cy.get('[data-cy=passwordConfirmation]');
  });
  it('Registers', function () {
    cy.visit('http://localhost:4200/register');
    cy.get('[data-cy=firstname]').type('Test');
    cy.get('[data-cy=lastname]').type('Test');
    cy.get('[data-cy=email]').type('test@test.com');
    cy.get('[data-cy=emailConfirmation]').type('test@test.com');
    cy.get('[data-cy=password]').type('P@ssword1');
    cy.get('[data-cy=passwordConfirmation]').type('P@ssword1');
    cy.get('[data-cy=registerButton]').click();
    cy.contains('test@test.com');
  });
});
