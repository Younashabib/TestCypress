/// <reference types = "Cypress" />

import { demoQAWebsite } from "../../support/demoQA.page";

let homePageDemoQAWebsite = new demoQAWebsite();

beforeEach(() => {
  homePageDemoQAWebsite.loadWebsiteURL;
});

describe("Verify demoQA WebPage", () => {
  it("Open Elements Page", () => {
    homePageDemoQAWebsite.elementsTab;
  });
});
