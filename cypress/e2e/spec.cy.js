
/// <reference types="cypress"/>

describe('Test', () => {
  let auth = Cypress.env('auth')
  beforeEach('Logando no sistema', () => {
    cy.visit('')
    cy.login(auth.cpf, auth.senha)
  })

  it('Adicionando os 2 produtos no carrinho e removendo', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    //cy.get('.ShippingInfoComponent > :nth-child(2) > b').should('contain.text', 'CEP: 30840-660')

    //add um produto tenda
    cy.get('#searchbarComponent').type('Mistura para Pão Francês Select 25kg', { delay: 150 })
    cy.contains('button', 'Buscar').click()
    cy.get('.MosaicCardContainer > .row').should('be.visible')
    cy.contains('[data-cy="btn-"]', 'Adicionar').click()

    //add um protudo seller 
    cy.get('#searchbarComponent').clear().type('Teste Altração Preço Manual Sku', { delay: 150 })
    cy.contains('button', 'Buscar').click()
    cy.get('.MosaicCardContainer > .row').should('be.visible')
    cy.scrollTo('top')
    cy.contains('[data-cy="btn-"]', 'Adicionar').click()


    ////removendo item carrinho
    cy.get('#item-list-manualSku01-0001 > .box-quantity > :nth-child(1)').click()
    cy.scrollTo('top')
    cy.wait(50000)
    cy.get('.box-quantity > :nth-child(1)').first().click({ force: true })
  })

  it.only('Finalizando a compra por boleto', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    //cy.get('.ShippingInfoComponent > :nth-child(2) > b').should('contain.text', 'Belo Horizonte - 30840-660')

    // //add um produto tenda
    // cy.get('#searchbarComponent').type('Melancia Rajada', { delay: 150 })
    // cy.contains('button', 'Buscar').click()
    // cy.get('.MosaicCardContainer > .row').should('be.visible')
    // cy.contains('[data-cy="btn-"]', 'Adicionar').click()
    // cy.scrollTo('top')

    // // //add um protudo seller 
    // cy.get('#searchbarComponent').clear().type('Ovos Grandes Branco Cinta 5 Dúzias', { delay: 150 })
    // cy.contains('button', 'Buscar').click()
    // cy.get('.MosaicCardContainer > .row').should('be.visible')
    // cy.scrollTo('top')
    // cy.contains('[data-cy="btn-"]', 'Adicionar').click()

    
    cy.contains('[data-cy="btn-"]', 'Ver carrinho').click()
    cy.get('.title-head').should('contain.text', 'Caso algum desses produtos não esteja disponível, o que fazer?')
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.contains('[class="btn btn-finish-order btn-block"]', 'Finalizar compra').should('be.visible')
    cy.wait(50000)
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.get('[id="nav-billet-tab"]').click()
    cy.scrollTo('bottom')
    cy.contains('[class="btn btn-btn btn-primary btn-buy "]','Pagar com boleto').click()


    // cy.get('.resume-buttons > .btn').click()
    // cy.wait(50000)
    // cy.get('#\"nav-billet-tab\" > .tab-header').click()
    // cy.get('.billet-component > :nth-child(1) > p').should('contain.text', 'Imprima o boleto e pague no banco ou pague pela internet utilizando o código de barras do boleto. O prazo de validade do boleto é de 3 dias.')
    // cy.get('.btn-buy').click()
  
    
  

    
  

  })

  // afterEach('logoff', () => {
  //   cy.logoff()
  // })
})