class LoginPage {
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('#login-button'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };
  username(username) {
    return cy.get('[data-test="username"]').type(username);
  }
  password(password) {
    return cy.get('[data-test="password"]').type(password);
  }
  loginbtn() {
    return cy.get('[data-test="login-button"]').click();
  }
  errormessage() {
    return cy.get('[data-test="error"]');
  }
}

export default LoginPage;
