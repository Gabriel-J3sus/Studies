/// <reference types='cypress' />

describe('Enter application and send a message', () => {
  beforeEach('visit page and set authentication token', () => {
    cy.visit('http://localhost:3000')
    localStorage.setItem('@dowhile:token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJHYWJyaWVsIEFyYcO6am8gZGUgSmVzdXMiLCJhdmF0YXJfdXIiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjA3MDk2Njc_dj00IiwiaWQiOiI0MjhiMjk1OC1kZjYyLTRjNmYtYWZmOS04NTEwOGUzNmRmZDIifSwiaWF0IjoxNjM1NTEyNTkzLCJleHAiOjE2MzU1OTg5OTMsInN1YiI6IjQyOGIyOTU4LWRmNjItNGM2Zi1hZmY5LTg1MTA4ZTM2ZGZkMiJ9.rrJ1cNIltXYvCqBYjOl5PiHp1fcEXcmvg7gxS5GnRm0')
  })

  after('logout', () => {
    cy.get('#logout-button') //search for this id
      .click() //click button
  })

  it('Send message', () => {
    cy.get('textarea') //find element
      .type('Que coisa legal') //type in the textarea
      .should('have.value', 'Que coisa legal') //see if textarea has the right value

    cy.get('button') //find element
      .contains('Enviar mensagem') //find text
      .click() //click button

    cy.contains('Que coisa legal') //find text
  })
})