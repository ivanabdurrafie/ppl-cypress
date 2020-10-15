/// <reference types="cypress" />

describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Ivan Abdurrafie')
        cy.get('[type="text"][placeholder="Email"]')
            .type('iabdurrafie48@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });
    
})