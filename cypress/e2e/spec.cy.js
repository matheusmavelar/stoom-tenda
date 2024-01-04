
/// <reference types="cypress"/>

describe('Test', () => {
  let auth = Cypress.env('auth')
  let cartao = Cypress.env('cartao')
  beforeEach('Logando no sistema', () => {
    cy.visit('')
    cy.login(auth.cpf, auth.senha)
  })

  it('Adicionando os 2 produtos no carrinho e removendo', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    cy.addPrd('Mistura para Pão Francês Select 25kg')
    cy.addPrd('Teste Altração Preço Manual Sku')
    cy.delPrd()
    cy.intercept('DELETE', '**/item/**').as('loading')
    cy.wait('@loading')
    cy.delPrd()
    cy.get('[class="empty-cart"]').should('have.text', 'Seu carrinho ainda está vazio.')
  })

  it.skip('Finalizando a compra por cartao com falha', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    cy.addPrd('Mistura para Pão Francês Select 25kg')
    cy.addPrd('Teste Altração Preço Manual Sku')
    cy.contains('[data-cy="btn-"]', 'Ver carrinho').click()
    cy.get('.title-head').should('contain.text', 'Caso algum desses produtos não esteja disponível, o que fazer?')
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.contains('[class="btn btn-finish-order btn-block"]', 'Finalizar compra').should('be.visible')
    cy.wait(5000)
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.contains('Cartão de crédito').click()
    cy.addCartao(cartao.numCartao, cartao.cvv, cartao.nome, cartao.cpf)
    cy.get('.Toastify__toast-body').should('have.text', 'Falha ao realizar seu pagamento. Por gentileza, confira os dados do cartão e tente novamente.')
    cy.get('[class="svgIcon svg-logo"]').click()
    cy.delPrd()
    cy.intercept('DELETE', '**/item/**').as('loading')
    cy.wait('@loading')
    cy.delPrd()
    cy.get('[class="empty-cart"]').should('have.text', 'Seu carrinho ainda está vazio.')
  })

  it('Finalizando a compra por boleto', () => {
    cy.contains('[data-cy="btn-"]', 'CONCORDO E FECHAR').click()
    cy.addPrd('Mistura para Pão Francês Select 25kg')
    cy.addPrd('Teste Altração Preço Manual Sku')
    cy.contains('[data-cy="btn-"]', 'Ver carrinho').click()
    cy.get('.title-head').should('contain.text', 'Caso algum desses produtos não esteja disponível, o que fazer?')
    cy.get('[class="btn btn-finish-order btn-block"]').click()
    cy.pagarBoleto()
    cy.url().should('be.equal', 'https://marketplace-alpha.tendaatacado.com.br/resumo-pedido')
    cy.get('#btFechar').click()
  })

  after('logoff', () => {
    cy.get('.LogoComponent > .svgIcon').click()
    cy.delPrd()
    cy.intercept('DELETE', '**/item/**').as('loading')
    cy.wait('@loading')
    cy.delPrd()
    cy.logoff()
  })
})