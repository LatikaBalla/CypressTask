const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost/Demo',
    specPattern: 'cypress/integration/*.feature',
    supportFile: 'cypress/support/index.js',
    chromeWebSecurity: false ,
    
    failOnStatusCode: false,
  },
  });

