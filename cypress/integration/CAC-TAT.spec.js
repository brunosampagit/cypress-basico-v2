/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
      cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
      cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
  it('preencha os campos obrigatorios', function(){
      const longtext = 'TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE, TESTE,TESTE, TESTE, TESTE,TESTE, TESTE, TESTE,TESTE, TESTE, TESTE.'
      cy.get('#firstName').type('Bruno',{delay: 0})
      cy.get('#lastName').type('Nascimento',{delay: 0})
      cy.get('#email').type('verissimo18_sampa@hotmail.com',{delay: 0})
      cy.get('#open-text-area').type(longtext,{delay: 0})
      cy.get('button[type="submit"]').click()
      cy.get('.success').should('be.visible')
  })  
  it('email com formatacao errada', function(){
    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Nascimento')
    cy.get('#email').type('verissimo18_sampa@hotmail,com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })
  it('digitar telefone com formatacao errada',function(){
    cy.get('#phone')
    .type('abcdefghij')
    .should('have.value','')
  })
  it('tornar telefone obrigatorio e enviar o formulario sem digitar o telefone',function(){
    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Nascimento')
    cy.get('#email').type('verissimo18_sampa@hotmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  it('digitando campos comn telefone obrigatorio',function(){
    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Nascimento')
    cy.get('#email').type('verissimo18_sampa@hotmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('11970809294')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
  it('verificar valor preenchido e limpar campos',function(){
    cy.get('#firstName').type('Bruno').should('have.value','Bruno').clear().should('have.value','')
    cy.get('#lastName').type('Nascimento').should('have.value','Nascimento').clear().should('have.value','')
    cy.get('#email').type('verissimo18_sampa@hotmail.com').should('have.value','verissimo18_sampa@hotmail.com').clear().should('have.value','')
    cy.get('#phone').type('11970809294').should('have.value','11970809294').clear().should('have.value','')
  })
  it('clicar enviar com campos em branco', function(){
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  /*it('enviar formulario com comando customizado', function(){
    cy.preenchaoscamposeenvia()
    cy.get('.success').should('be.visible')
  })*/
  it('selecione um produto por seu texto', function(){
    cy.get('#product').select('Cursos')
    .should('have.value','cursos')
  })
  it('selecione um produto por seu valor', function(){
    cy.get('#product').select('mentoria')
    .should('have.value','mentoria')
  })
  it('selecione um produto por seu indice',function(){
    cy.get('#product').select(4)
    .should('have.value', 'youtube')
  })
  it('marca o tipo de atendimento Feedback', function(){
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value','feedback')
  })
  it('marca cada tipo de atendimento',function(){
    cy.get('input[type="radio"]')
      .should('have.length',3)
      .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })
  it('marca ambos checkboxes e depois desmarca o ultimo',function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures',function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })
  it('seleciona um arquivo simulando um drag-and-drop',function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', { action:'drag-drop'})
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
})
it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
  cy.fixture('example.json').as('bruno')
  cy.get('input[type="file"]')
  .selectFile('@bruno')
  .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
      })
})
it('verifica que a politica de privacidade abre em outra aba sem necessidade de um clique', function(){
  cy.get('#privacy a').should('have.attr', 'target','_blank')
  
})

it('acessa a pagina da politica de privacidade removendo o target e entao abre na mesma tela', function(){
  cy.get('#privacy a')
  .invoke('removeAttr','target')
  .click()

 cy.contains('Talking About Testing').should('be.visible')
})
it('acessa a pagina da politica de privacidade removendo o target e entao abre na mesma tela', function(){
  cy.get('#privacy a')
  .invoke('removeAttr','target')
  .click()

 cy.contains('Talking AAAbout Testing').should('be.visible')
})


})

