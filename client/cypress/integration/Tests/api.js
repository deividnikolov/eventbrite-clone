/// <reference types="cypress" />
describe('sending requests', () => {
  
  it('POST/log token', () => {
    cy
    .request({
      url: 'http://localhost:3000/users/signin',
      failOnStatusCode: false,
      method: 'POST',
      body: {
        email: 'ash1@gmail.com',
        password: 'axe',
      },
    })
      .its('body')
      .then((res) => cy.log(res.token));
  });
  it('GET', () => {
    cy
    .request(
      'GET',
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0'
    ).then((response) => {
      expect(response).to.have.property('status', 200);
      expect(response.body).to.not.be.null;
      expect(response.body.page).to.have.property('size', 20);
    });
  });
   

   })

 


