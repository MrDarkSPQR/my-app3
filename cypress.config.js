const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      specPattern: "cypress/e2e/*.cy.js",
      baseUrl: "http://localhost:3000",
      setupNodeEvents(on, config) {
    }},
  
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
});
