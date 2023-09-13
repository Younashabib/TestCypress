const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.cypress.io/",
    specPattern: "cypress/e2e/**/*spec.{js,jsx,ts,tsx,feature}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/1-getting-started",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    viewportHeight: 1200,
    viewportWidth: 1920,
  },
});
