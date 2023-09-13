export class websiteHomePage {
  get openWebsite() {
    return cy
      .visit("https://automationintesting.com/")
      .url()
      .should("include", "automationintesting.com");
  }

  get principlesLink() {
    return cy
      .get("#quicklook-principes")
      .click()
      .url()
      .should("include", "principles");
  }

  get trainingsLink() {
    return cy
      .get("#quicklook-training")
      .click()
      .url()
      .should("include", "training");
  }

  get onlineCoursesLink() {
    return cy
      .get("#quicklook-onlinecourses")
      .click()
      .url()
      .should("include", "onlinecourses");
  }

  get practiceLink() {
    return cy
      .get("#quicklook-practice")
      .click()
      .url()
      .should("include", "practice");
  }

  get AITonlineLink() {
    return cy
      .get("#quicklook-aitonline")
      .click()
      .url()
      .should("include", "aitonline");
  }
  get blogLink() {
    return cy.get("#quicklook-blog").click().url().should("include", "blog");
  }
}
