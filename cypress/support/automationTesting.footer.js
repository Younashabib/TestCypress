export class footerAutomationTestingHomePage {
  get homeFooter() {
    cy.get('a[href="/"]').contains("Home").click();
  }

  get aboutFooter() {
    cy.get('a[href="/about"]').contains("About").click().go("back");
  }
  get trainingFooter() {
    cy.get('a[href="/training]').contains("Training").go("back");
  }
}
