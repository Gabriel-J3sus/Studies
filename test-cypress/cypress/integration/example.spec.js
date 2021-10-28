/// <reference types="cypress" />
//references the cypress types

describe('My first test', () => {
  it('does nothing', () => {
    expect(true).to.equal(true)
  })

  it('visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io') //visits a web page

    cy.contains('type').click() //find an element with the string "type" e clica nela, nos redirecionando para uma nova página
  })

  it('makes an assertion', () => {
    cy.visit('https://example.cypress.io') //visits a web page

    cy.contains('type').click() //find an element with the string "type" e clica nela, nos redirecionando para uma nova página

    cy.url()
      .should('include', '/commands/actions') //veryfy if when you click, we are redirected to https://example.cypress.io/commands/actions
  })

  it('take an element based on css class', () => {
    cy.visit('https://example.cypress.io') //visits a web page

    cy.contains('type').click() //find an element with the string "type" e clica nela, nos redirecionando para uma nova página

    cy.url()
      .should('include', '/commands/actions') //verify if when you click, we are redirected to https://example.cypress.io/commands/actions

    cy.get('.action-email') //take element based on css class
      .type('gabr.jesus001@gmail.com') //type in the input
      .should('have.value', 'gabr.jesus001@gmail.com') //verify if the input has the same specifed value
  })
})