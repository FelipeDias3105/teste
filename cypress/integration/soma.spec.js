describe('soma', () => { // lambda ou arrow function
    it('3+1', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn3').click()
        cy.get('#btnSoma').click()
        cy.get('#btn1').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '4')
    })
    it('14+5', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn1').click()
        cy.get('#btn4').click()
        cy.get('#btnSoma').click()
        cy.get('#btn5').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '19')
    })
    it('14,5 + 4,6 = 19,1', () => {
            cy.visit('http://127.0.0.1:5500/index.html')
            cy.contains('Calculadora')
            cy.get('#btn1').click()
            cy.get('#btn4').click()
            cy.get('#btnVirgula').click()
            cy.get('#btn5').click()
            cy.get('#btnSoma').click()
            cy.get('#btn4').click()
            cy.get('#btnVirgula').click()
            cy.get('#btn6').click()
            cy.get('.resultado').click()
            cy.get('#visor').should('have.value', '19,1')
        })
        // it('1 + = ', () => {
        //     cy.visit('http://127.0.0.1:5500/index.html')
        //     cy.contains('Calculadora')
        //     cy.get('#btn1').click()
        //     cy.get('#btn4').click()
        //     cy.get('#btnVirgula').click()
        //     cy.get('#btn5').click()
        //     cy.get('#btnSoma').click()
        //     cy.get('#btn4').click()
        //     cy.get('#btnVirgula').click()
        //     cy.get('#btn6').click()
        //     cy.get('.resultado').click()
        //     cy.get('#visor').should('have.value', '19,1')
        // })
        // it(' + 1 = ', () => {
        //     cy.visit('http://127.0.0.1:5500/index.html')
        //     cy.contains('Calculadora')
        //     cy.get('#btn1').click()
        //     cy.get('#btn4').click()
        //     cy.get('#btnVirgula').click()
        //     cy.get('#btn5').click()
        //     cy.get('#btnSoma').click()
        //     cy.get('#btn4').click()
        //     cy.get('#btnVirgula').click()
        //     cy.get('#btn6').click()
        //     cy.get('.resultado').click()
        //     cy.get('#visor').should('have.value', '19,1')
        // })
})