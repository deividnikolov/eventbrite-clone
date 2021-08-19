class RegisterPage {
  elements = {
    registerEmailField: () => cy.get('[type="text"]'),
    registerPasswordField: () => cy.get('[type="password"]'),
    registerButton: () => cy.get('.btn'),
  };
  enterEmail(registerEmail) {
    this.elements.registerEmailField().type(registerEmail);
  }
  enterPassword(registerPassword) {
    this.elements.registerPasswordField().type(registerPassword);
  }
  clickRegisterButton() {
    this.elements.registerButton().click();
  }
  register(registerEmail, registerPassword) {
    this.elements.registerEmailField().type(registerEmail);
    this.elements.registerPasswordField().type(registerPassword);
    this.elements.registerButton().click();
  }
}
module.exports = new RegisterPage();
