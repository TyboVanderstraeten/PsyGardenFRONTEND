/// <reference types="cypress" />

describe('Event testing', function () {
  it('Gets all events', function () {
    cy.server();

    cy.route({
      method: 'GET',
      url: '/PsyGardenAPI/Events',
      status: 200,
      response: 'fixture:events.json'
    });

    cy.request('http://localhost:4200/PsyGardenAPI/Events')
    .then((response)=>{
        expect(response.body).to.have.length(4);
        expect(response.body).to
    })
  });

  it('Gets event with id 1', function () {
    cy.server();

    cy.route({
      method: 'GET',
      url: '/PsyGardenAPI/Events/1',
      status: 200,
      response: 'fixture:eventId1.json'
    }).as('getAllEvents');

    cy.request('http://localhost:4200/PsyGardenAPI/Events/1')
      .then((response) => {
        expect(response.body).to.have.property('eventId', 1);
        expect(response.body).to.have.property('name', 'Boom');
        expect(response.body).to.have.property('nrOfDays', 8);
        expect(response.body).to.have.property('country', 'Portugal');
      });
  });
});
