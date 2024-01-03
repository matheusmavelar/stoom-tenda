const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1820,
  viewportHeight: 832,
  e2e: {
    defaultCommandTimeout:50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
