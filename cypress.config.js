const { defineConfig } = require("cypress");
/**
*@type {Cypress.PluginConfig}
*/
const fs = require('fs-extra');
const path = require('path');



function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  viewportWidth: 1820,
  viewportHeight: 832,
  e2e: {
    baseUrl:'https://marketplace-alpha.tendaatacado.com.br/',
    defaultCommandTimeout:80000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.confiFile || 'dev';
      return getConfigurationByFile(file);
    },
  },
});
