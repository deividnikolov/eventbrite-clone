class LoginPage {
  elements = {
    loginEmailField: () => cy.get('[type="text"]'),
    loginPasswordField: () => cy.get('[type="password"]'),
    loginButton: () => cy.get('.btn'),
    errorMessage: () => cy.get('.errorMessage'),
  };
  enterEmail(loginEmail) {
    this.elements.loginEmailField().type(loginEmail);
  }
  enterPassword(loginPassword) {
    this.elements.loginPasswordField().type(loginPassword);
  }
  clickLoginButton() {
    this.elements.loginButton().click();
  }
  login(loginEmail, loginPassword) {
    this.elements.loginEmailField().type(loginEmail);
    this.elements.loginPasswordField().type(loginPassword);
    this.elements.loginButton().click();
  }
}
module.exports = new LoginPage();
