/// <reference types="cypress" />

describe('Page visiting testing non-authorized', function () {
  //Allowed
  it('Website runs', function () {
    cy.visit('http://localhost:4200');
  });
  it('Europe map runs', function () {
    cy.visit('http://localhost:4200/europe-map');
  });
  it('All events runs', function () {
    cy.visit('http://localhost:4200/all-events');
  });
  it('Register runs', function () {
    cy.visit('http://localhost:4200/register');
  });
  it('Login runs', function () {
    cy.visit('http://localhost:4200/login');
  });
  it('Detail page runs', function () {
    cy.visit('http://localhost:4200/all-events/detail-page/1');
  });

  //Not allowed
  it('Add-event; Redirects to login page', function () {
    cy.visit('http://localhost:4200/add-event');
    cy.get('[data-cy=loginButton]');
  });
  it('Add-link; Redirects to login page', function () {
    cy.visit('http://localhost:4200/add-event/1/add-link');
    cy.get('[data-cy=loginButton]');
  });
  it('Add-price; Redirects to login page', function () {
    cy.visit('http://localhost:4200/add-event/1/add-price');
    cy.get('[data-cy=loginButton]');
  });
  it('Add-genre; Redirects to login page', function () {
    cy.visit('http://localhost:4200/add-event/1/add-genre');
    cy.get('[data-cy=loginButton]');
  });
  it('Remove-event; Redirects to login page', function () {
    cy.visit('http://localhost:4200/remove-event/1');
    cy.get('[data-cy=loginButton]');
  });
  it('Add-genre; Redirects to login page', function () {
    cy.visit('http://localhost:4200/add-genre');
    cy.get('[data-cy=loginButton]');
  });
  it('Edit-genre; Redirects to login page', function () {
    cy.visit('http://localhost:4200/edit-genre/1');
    cy.get('[data-cy=loginButton]');
  });
  it('Remove-genre; Redirects to login page', function () {
    cy.visit('http://localhost:4200/remove-genre/1');
    cy.get('[data-cy=loginButton]');
  });
  it('Profile; Redirects to login page', function () {
    cy.visit('http://localhost:4200/profile');
    cy.get('[data-cy=loginButton]');
  });
  it('Interests; Redirects to login page', function () {
    cy.visit('http://localhost:4200/interests');
    cy.get('[data-cy=loginButton]');
  });
  it('Goings; Redirects to login page', function () {
    cy.visit('http://localhost:4200/goings');
    cy.get('[data-cy=loginButton]');
  });
});
