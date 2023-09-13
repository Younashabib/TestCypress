/// <reference types = "Cypress" />
import { websiteHomePage } from "../../support/automationTesting.page";
import { footerAutomationTestingHomePage } from "../../support/automationTesting.footer";

let visitWebsiteHomePage = new websiteHomePage();
let checkFooterHomePage = new footerAutomationTestingHomePage();

beforeEach(() => {
  visitWebsiteHomePage.openWebsite;
});
describe("Testing Automation Website", () => {
  it("Clicking Links on Website HomePage", () => {
    visitWebsiteHomePage.principlesLink;
    visitWebsiteHomePage.trainingsLink;
    visitWebsiteHomePage.onlineCoursesLink;
    visitWebsiteHomePage.practiceLink;
    visitWebsiteHomePage.AITonlineLink;
    visitWebsiteHomePage.blogLink;
  });
  it("Checking Footer Links", () => {
    checkFooterHomePage.homeFooter;
    checkFooterHomePage.aboutFooter;
    checkFooterHomePage.trainingFooter;
  });
});
