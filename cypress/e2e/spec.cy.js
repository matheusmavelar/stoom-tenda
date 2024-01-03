
/// <reference types="cypress"/>

describe('Test', () => {
  let auth = Cypress.env('auth')
  beforeEach('Logando no sistema', () => {
    cy.visit('')
    cy.login(auth.cpf,auth.senha)
  })

  it.only('Adicionando os 2 produtos no carrinho e removendo', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    cy.contains('a', 'Produtos').click()
    cy.get('.ShippingInfoComponent > :nth-child(2) > b').should('contain.text', 'CEP: 30840-660')
    // //add um produto tenda
    // cy.get('#searchbarComponent').type('Mistura para Pão Francês Select 25kg', { delay: 150 })
    // cy.contains('button', 'Buscar').click()
    // cy.get('.box-group > .mini-loading > .spinner-border').should('be.visible')
    // cy.get('.card-item').should('be.visible')
    // cy.get('#buttonbuy-sku-').should('be.visible')
    // cy.get('#buttonbuy-sku-').click()
    // //add um protudo seller 
    // cy.get('#searchbarComponent').clear().type('Teste Altração Preço Manual Sku', { delay: 150 })
    // cy.contains('button', 'Buscar').click()
    // cy.get('#buttonbuy-sku-').click()


    // //removendo item carrinho
    // cy.get('#item-list-manualSku01-0001 > .box-quantity > :nth-child(1)').click()
    // cy.get('#item-list-000000000000954045-SC > .box-quantity > :nth-child(1)').click()
    // cy.get('.box-quantity > :nth-child(1)')
  })

  // it('Datas nao disponivel para essa modalidade', () => {
  //   cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
  //   cy.contains('a','Produtos').click()
  //   cy.get('#shipping-cep').type('30840660')
  //   cy.contains('Clique & Retire').click()
  //   cy.contains('Atlântica').click()
  //   cy.contains('p','Infelizmente não possuímos datas disponíveis para essa modalidade.').should('be.visible')
  // })

  afterEach('logoff', () => {
    cy.logoff()
  })



})