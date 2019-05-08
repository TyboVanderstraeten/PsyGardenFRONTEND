/// <reference types="cypress" />

describe('Basic testing',function(){
    it('Website runs',function(){
        cy.visit('http://localhost:4200');
    });
});