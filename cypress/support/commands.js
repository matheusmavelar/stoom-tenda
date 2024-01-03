// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (cpf, senha) => { 
    cy.get('[id="userTopArea"]').click()
    cy.get('[id="login"]').type(cpf)
    cy.get('[id="password"]').type(senha)
    cy.contains('[data-cy="btn-"]', 'Continuar').click()
  })

  Cypress.Commands.add('logoff', () => { 
    cy.get('[id="userTopArea"]').click()
    cy.get('[data-cy="btn-logout"]').click()
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })