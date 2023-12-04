const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.lipsum.com/', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    viewPort: "macbook-16",
  }
});
