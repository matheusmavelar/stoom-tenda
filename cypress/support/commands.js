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

  Cypress.Commands.add('addPrd', (produto) => { 
    cy.get('#searchbarComponent').clear().type( produto ,{ delay: 150 })
    cy.contains('button', 'Buscar').click()
    cy.get('.MosaicCardContainer > .row').should('be.visible')
    cy.contains('[data-cy="btn-"]', 'Adicionar').click()
    cy.get('[class="item-in-cart"]').should('be.visible')
  })

  Cypress.Commands.add('delPrd', () => { 
    cy.scrollTo('top')
    cy.get('[class="btn-action"]').first().click({force:true})
  })

  Cypress.Commands.add('addCartao', (numCartao, cvv, nome, cpf) => { 
    cy.get('[id="number"]').type(numCartao)
    cy.get('[id="month"]').click()
    cy.get('[id=react-select-2-option-0]').click()
    cy.get('[id="year"]').click()
    cy.get('[id=react-select-3-option-0]').click()
    cy.get('[id="cvv"]').type(cvv)
    cy.get('[id="name"]').type(nome)
    cy.get('[id="cpf"]').type(cpf)
    cy.get('[id="installments"]').click()
    cy.get('[id=react-select-4-option-0]').click()
    cy.contains('button','Pagar com cartão de crédito').click() 
  })

  Cypress.Commands.add('pagarBoleto', () => { 
    cy.contains('[class="btn-delivery"]','Escolher endereço de entrega').click()
    cy.get('[class="ListAddresses"]').click()
    cy.contains('h2','Dados de entrega').should('be.visible')
    
    cy.contains('[class="content-header-package-separation"]', 'Entrega').should('be.visible')
    cy.contains('[class="btn-delivery"]','Escolher forma de entrega').click()
    cy.contains('[class="card-information-component"]', 'Clique & Retire').click()
    cy.contains('[class="card-information-component"]','Chaordic').click()
    cy.get('[class="tab-day "]').last().click()
    cy.contains('[class="card-information-component"]', 'A partir de ').click()

    cy.contains('[class="btn btn-finish-order btn-block"]', 'Finalizar compra').should('be.visible')
    cy.wait(5000)
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.contains('Boleto bancário').click()
    cy.scrollTo('bottom')
    cy.get('.btn-buy').click()
    cy.get('.action-area > .btn-primary').click()
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