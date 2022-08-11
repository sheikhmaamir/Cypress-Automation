//Importing Json from Fixtures//
const data = require('../fixtures/seeding.json');
const users = require('../fixtures/userdata.json');
//Importing login page objects from Loginpage.js
import LoginPage from '../support/loginpage';
//describe block is the parent test block which can have any number of it block
describe('Navigate To Website', () => {
  //This is out first it block or test for the describe block "Navigating to Website"
  it('Visit The Website', () => {
    //We have already set a baseUrl in cypress.config.js
    cy.visit('/');
    //Below we mention asseration for the login/landing page of the site
    cy.title().should('eq', data.title);
    cy.location().then((response) => {
      expect(response.host).eq(data.host);
      expect(response.href).eq(data.href);
      expect(response.protocol).eq(data.protocol);
    });
  });
  /* This second it block we verify different user login and login errors.
   We are using data from userdata.json to pass all the user names*/
  users.forEach((user) => {
    it(user.name, () => {
      const loginpage = new LoginPage();
      cy.visit('/');
      loginpage.username(user.username);
      loginpage.password(user.password);
      loginpage.loginbtn();
      //Using if else statment to use the above test to login with different users.
      if (user.username == 'standard_user') {
        cy.url().should('eq', user.message);
      } else {
        loginpage.errormessage().should('have.text', user.message);
      }
    });
  });
});
