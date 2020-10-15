/// <reference types="cypress" />

describe('Open Site', () => {
    it('test', () => {
    //   cy.visit()
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Layouts').click()
    })
  })