export class demoQAWebsite {
  get loadWebsiteURL() {
    return cy.visit("https://demoqa.com/");
  }

  get elementsTab() {
    return cy.get('[class="card mt-4 top-card"]').contains("Elements").click();
  }
}
