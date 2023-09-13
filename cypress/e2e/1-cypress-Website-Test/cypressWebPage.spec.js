/// <reference types = "Cypress" />
import { CypressHomePage } from "../../support/cypress.page";

let Cypress_HomePage = new CypressHomePage();
let email = "farie.sarfraz@gmail.com";
let password = "KhaYou99";

beforeEach(() => {
  cy.visit("");
});
describe("Open Cypress URL", () => {
  it("Verify URL Page", () => {
    Cypress_HomePage.OpenWebPage;
    //Cypress_HomePage.documentation.click();
  });

  it("Navigate to Login Page", () => {
    Cypress_HomePage.LoginButton.click();
    Cypress_HomePage.LoginCredentials.click();
    cy.url().should("include", "cypress");
    Cypress_HomePage.performLogin(email, password);
  });
});
