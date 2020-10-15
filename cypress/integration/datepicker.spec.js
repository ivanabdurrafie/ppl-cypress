/// <reference types="cypress" />

describe('Open Site',()=>{
    it('Open Datepicker on Form -> Datepicker', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
    });

    it('form picker', () => {
        cy.get('[placeholder="Form Picker"]').type('Jan 12,2020')
        cy.get('[placeholder="Range Picker"]').type('May 16,2020')
        cy.get('[placeholder="Min Max Picker"]').type('Oct 20,2020')
    });
    

})