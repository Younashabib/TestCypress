export class CypressHomePage {
  get OpenWebPage() {
    return cy.get('[data-cy="header-login"]');
  }

  get documentation() {
    return cy.contains('a[href="https://on.cypress.io"]', "Documentation");
  }

  get LoginButton() {
    return cy.get('[data-cy="header-login"]').invoke("removeAttr", "target");
  }

  get LoginCredentials() {
    return cy.get('button[class*="btn-provider-email"]');
  }

  get emailField() {
    return cy.get("#email");
  }

  get passwordField() {
    return cy.get("#password");
  }

  get clickLoginButton() {
    return cy.get('[type="submit"]');
  }

  performLogin(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.clickLoginButton.click();
  }
}

/**
   test() {
    this.LoginCredentials().click();
  }
 */
