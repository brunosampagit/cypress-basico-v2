/// <reference types="Cypress" />

describe('Acesso ao Antecipag', function() {
  const tres_miles_segundos = 3000
  beforeEach(function(){
      cy.visit('https://qa-app.antecipag.com.br/')
  })
  it('verifica o título da plataforma', function() {
      cy.title().should('be.equal','Antecipag | Entrar')
    })

it('cadastro financiador sucesso', function(){

  cy.clock()
  
  cy.get('#email').type('admin@admin.com')
  cy.get('#password').type('Finnet10@')
  cy.get('.MuiButton-root').click()
  cy.contains('Lista de usuários na plataforma Antecipag').should('be.visible')
  cy.get('[data-testid="MenuIcon"] > path').click()
  cy.get('[href="/financiadores"]').click()
  cy.tick(tres_miles_segundos)
  cy.contains('Financiador').should('be.visible')
  cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(2) > .MuiButton-root').click()
  cy.contains('Dados do Financiador').should('be.visible')
  cy.get('#rcc-confirm-button').click()
  cy.get('input[id="financier.document"]').type('77094011000102')
  cy.get('input[id="financier.name"]').type('Testeqabvnquinta')
  cy.get('input[id="minimumMonthlyBilling"]').type('100000000')
  cy.get('input[id="modules.invoice.successFee"]').type('0,123')
  cy.get('input[id="modules.card.successFee"]').type('0,456')
  cy.get('input[id="time.initial"]').type('1000')
  cy.get('input[id="time.final"]').type('1100')
  cy.get('[data-testid="AddCircleIcon"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/Institucional_Finnet.pdf', { action:'drag-drop'})
    cy.contains('Institucional_Finnet.pdf').should('be.visible')
    cy.get('.MuiButton-root').click()
    
})
it('cadastro financiador - Nome em branco', function(){

  cy.clock()
  
  cy.get('#email').type('admin@admin.com')
  cy.get('#password').type('Finnet10@')
  cy.get('.MuiButton-root').click()
  cy.contains('Lista de usuários na plataforma Antecipag').should('be.visible')
  cy.get('[data-testid="MenuIcon"] > path').click()
  cy.get('[href="/financiadores"]').click()
  cy.tick(tres_miles_segundos)
  cy.contains('Financiador').should('be.visible')
  cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(2) > .MuiButton-root').click()
  cy.contains('Dados do Financiador').should('be.visible')
  cy.get('#rcc-confirm-button').click()
  cy.get('input[id="financier.document"]').type('77094011000102')
  //cy.get('input[id="financier.name"]').type('Testeqabvnquinta')
  cy.get('input[id="minimumMonthlyBilling"]').type('100000000')
  cy.get('input[id="modules.invoice.successFee"]').type('0,123')
  cy.get('input[id="modules.card.successFee"]').type('0,456')
  cy.get('input[id="time.initial"]').type('1000')
  cy.get('input[id="time.final"]').type('1100')
  cy.get('[data-testid="AddCircleIcon"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/Institucional_Finnet.pdf', { action:'drag-drop'})
    cy.contains('Institucional_Finnet.pdf').should('be.visible')
    //cy.get('.MuiButton-root').click()
  
  })

  it('cadastro financiador - Nome 2 caracteres', function(){

    cy.clock()
    
    cy.get('#email').type('admin@admin.com')
    cy.get('#password').type('Finnet10@')
    cy.get('.MuiButton-root').click()
    cy.get('[data-testid="MenuIcon"] > path').click()
    cy.get('[href="/financiadores"]').click()
    cy.tick(tres_miles_segundos)
    cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(2) > .MuiButton-root').click()
    cy.get('#rcc-confirm-button').click()
    cy.get('input[id="financier.document"]').type('77094011000102')
    cy.get('input[id="financier.name"]').type('Te')
    cy.get('input[id="minimumMonthlyBilling"]').type('100000000')
    cy.get('input[id="modules.invoice.successFee"]').type('0,123')
    cy.get('input[id="modules.card.successFee"]').type('0,456')
    cy.get('input[id="time.initial"]').type('1000')
    cy.get('input[id="time.final"]').type('1100')
    cy.get('[data-testid="AddCircleIcon"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/Institucional_Finnet.pdf', { action:'drag-drop'})

      cy.contains('Razão Social deve conter pelo menos 3 caracteres.').should('be.visible')
      //cy.get('.MuiButton-root').click()

    })

    it('cadastro financiador - Nome 51 caracteres', function(){

      cy.clock()
      
      cy.get('#email').type('admin@admin.com')
      cy.get('#password').type('Finnet10@')
      cy.get('.MuiButton-root').click()
      cy.get('[data-testid="MenuIcon"] > path').click()
      cy.get('[href="/financiadores"]').click()
      cy.tick(tres_miles_segundos)
      cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(2) > .MuiButton-root').click()
      cy.get('#rcc-confirm-button').click()
      cy.get('input[id="financier.document"]').type('77094011000102')
      cy.get('input[id="financier.name"]').type('TesteTesteTesteTesteTesteTesteTesteTesteTeste Teste')
      cy.get('input[id="minimumMonthlyBilling"]').type('100000000')
      cy.get('input[id="modules.invoice.successFee"]').type('0,123')
      cy.get('input[id="modules.card.successFee"]').type('0,456')
      cy.get('input[id="time.initial"]').type('1000')
      cy.get('input[id="time.final"]').type('1100')
      cy.get('[data-testid="AddCircleIcon"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/Institucional_Finnet.pdf', { action:'drag-drop'})
  
        cy.contains('Razão Social pode conter no máximo 50 caracteres.').should('be.visible')
        //cy.get('.MuiButton-root').click()
  
      })
})



  /*abaixo temos alguns exemplos de preenchimento de cadastro.

    it('preencha os campos obrigatorios', function(){
      
      cy.clock()
      
      cy.get('#firstName').type('Bruno',{delay: 0})
      cy.get('#lastName').type('Nascimento',{delay: 0})
      cy.get('#email').type('verissimo18_sampa@hotmail.com',{delay: 0})
      cy.get('button[type="submit"]').click()
      cy.get('.success').should('be.visible')
      cy.tick(tres_miles_segundos)
      cy.get('.success').should('not.be.visible')
  })  

  it('email com formatacao errada', function(){

    cy.clock()

    cy.get('#firstName').type('Bruno',{delay: 0})
    cy.get('#lastName').type('Nascimento',{delay: 0})
    cy.get('#email').type('verissimo18_sampa@hotmail,com',{delay: 0})
    cy.get('#open-text-area').type('teste',{delay: 0})
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
    
    cy.tick(tres_miles_segundos)

    cy.get('.error').should('not.be.visible')
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

    cy.clock()

    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Nascimento')
    cy.get('#email').type('verissimo18_sampa@hotmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('11970809294')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')

    cy.tick(tres_miles_segundos)

    cy.get('.success').should('not.be.visible')
  })
  it('verificar valor preenchido e limpar campos',function(){
    cy.get('#firstName').type('Bruno').should('have.value','Bruno').clear().should('have.value','')
    cy.get('#lastName').type('Nascimento').should('have.value','Nascimento').clear().should('have.value','')
    cy.get('#email').type('verissimo18_sampa@hotmail.com').should('have.value','verissimo18_sampa@hotmail.com').clear().should('have.value','')
    cy.get('#phone').type('11970809294').should('have.value','11970809294').clear().should('have.value','')
  })
  it('clicar enviar com campos em branco', function(){
    cy.clock()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')

    cy.tick(tres_miles_segundos)

    cy.get('.error').should('not.be.visible')

  })
  /*it('enviar formulario com comando customizado', function(){
    cy.preenchaoscamposeenvia()
    cy.get('.success').should('be.visible')
  })
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
 
Cypress._.times(3, function(){

  it('marca ambos checkboxes e depois desmarca o ultimo',function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
} )

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
it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
  cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
})
it('preenche a are de texto usando o comando invoke', function(){
  const longText = Cypress._.repeat('0123456789', 10)

  cy.get('#open-text-area')
    .invoke('val', longText)
    .should('have.value', longText)
})  
it('faz uma requisição HTTP', function(){
  cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should(function(response) {
      const {status, statusText, body} = response
      expect (status).to.equal(200)
      expect (statusText).to.equal('OK')
      expect(body).to.include('CAC TAT')
    })
    
})
it('encontra o gato escondido', function(){
  cy.get('#cat')
    .invoke('show')
    .should('be.visible')
    cy.get('#title')
      .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
      .invoke('text', 'Eu amo gatos')
})*/



