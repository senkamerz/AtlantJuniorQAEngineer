// cypress - Spec

describe('Second test suite', function () {
    it('First test case', function () {

        cy.visit('https://www.navigator.ba/');
        
        cy.get('#ember564').type('Narodno');
        cy.get('.tt-dataset-0 div').each(($e1, index, $list) => {
 
            if($e1.text()==="Narodno pozorište")
            {
                cy.wrap($e1).click()
            }
         
         
        })

        cy.get('.name').should('contain.text', 'Narodno pozorište');

        cy.get('.leaflet-popup-tip-container').should('be.visible');

        cy.get('#header_container').find("a").eq(0).click({force : true});
    })

    it('Second test case', function () {

        cy.visit('https://www.navigator.ba/');

        cy.get('.art').find("a").eq(0).click({force : true});
        cy.get('.content').contains('Ars Aevi').click({force : true});

        cy.get('.leaflet-popup-tip-container').should('be.visible');
        cy.get('.name').should('contain.text', 'Ars Aevi');
        cy.get('#header_container').find("a").eq(0).click({force : true});
    })
})