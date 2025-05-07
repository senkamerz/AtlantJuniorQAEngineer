// cypress - Spec

describe('About page', function () {

    it('|First test case', function () {

        cy.visit('https://www.navigator.ba/');

        cy.get('#footer').find('a').eq('0').click({force : true});
        cy.get('.btn-en').click({force : true});

        cy.get('.active > h2').should('contain.text', 'A new concept & visual identity');
        cy.get('.right').click({force : true});
        cy.get('.active > h2').should('contain.text', 'Available on all popular devices');
        cy.get('.right').click({force : true});
        cy.get('.active > h2').should('contain.text', 'Fresh content');
        cy.get('.right').click({force : true});
        cy.get('.btn-bs').click({force : true});
        cy.get('.active > h2').should('contain.text', 'Novi koncept i vizuelni identitet');

    })

    it('Second test case', function () {

        cy.visit('https://www.navigator.ba/');

        cy.get('#footer').find('a').eq('0').click({force : true});
        cy.get('.btn-en').click({force : true});

        cy.get('.active > h2').should('contain.text', 'A new concept & visual identity');
        cy.get('#myCarousel > .left').click({force : true});
        cy.get('.active > h2').should('contain.text', 'Fresh content');
        cy.get('.btn-bs').click({force : true});
        cy.get('.active > h2').should('contain.text', 'Svjež sadržaj');

    })

})