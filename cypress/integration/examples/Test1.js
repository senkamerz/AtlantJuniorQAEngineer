// cypress - Spec

describe('Suggest features - report a problem page', function () {
    it('Send message', function () {

        cy.visit('https://www.navigator.ba/');
        cy.get('[title="Predloži ideju - Pošalji komentar"]').click();
        cy.get('h4').should('contain.text', 'Navigator po tvojoj mjeri');

        cy.get('#feedback > :nth-child(1) > input').type('John Snow');
        cy.get('.emailcheck').type('johnsnow@gmail.com');
        cy.get('.required').type('*Writes some idea*');
        cy.get('.red').click();
        cy.get('.green-button').click();

        cy.get('.alert',  { timeout: 6000 }).should('contain.text', 'poslana');
    })

    it('Send message without valid e-mail', function () {

        cy.visit('https://www.navigator.ba/');
        cy.get('[title="Predloži ideju - Pošalji komentar"]').click();
        cy.get('h4').should('contain.text', 'Navigator po tvojoj mjeri');

        cy.get('#feedback > :nth-child(1) > input').type('John Snow');
        cy.get('.required').type('*Writes some idea*');
        cy.get('.red').click();
        cy.get('.green-button').click();

        cy.get('.alert',  { timeout: 6000 }).should('contain.text', 'Greška');
    })
})