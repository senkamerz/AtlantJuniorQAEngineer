
describe('Create place', function () {
    it('Create place with valid information', function () {

        cy.visit('https://www.navigator.ba/');

        cy.get('[title="Kreiraj objekat"]').click();
        cy.get('h4').should('contain.text', 'Kreiraj objekat');

        cy.get('#poi_name').type('Restoran Little Asia');
        cy.get('#poi_city_name').type('Sarajevo');
        cy.get('#poi_zip_code').type('71000');
        cy.get('#poi_place_id').type('Trg heroja');
        cy.get('#poi_house_number').type('8');

        cy.get('.leaflet-popup-tip-container').should('be.visible');

        cy.get('#poi_description').type('Fina azijska hrana u ugodnoj atmosferi.');

        cy.get('.category-selector-container').find("button").eq(0).click({ force: true });
        cy.get('.category-selector-row').find('select').should('be.visible').select('Hrana');
        cy.get('.category-selector-row').find('select').should('have.length', 2);

        cy.get('#working_hours_0_0').type('13');
        cy.get('#working_hours_0_1').type('22');
        cy.get('.whours_input > .btn').click();
        cy.get('.selected-whours-heading').should('be.visible');

        cy.get('#poi_phone').type('+38733123456');
        cy.get('#poi_mobile_phone').type('+38761123456');
        cy.get('#poi_web').type('www.restoranlittleasia.ba');

        cy.get('#poi_has_wifi').check({ force: true });
        cy.get('#poi_wifi_pass').should('be.enabled').type('pardon');
        cy.get('#poi_wifi_ssid').should('be.enabled').type('samo izvolite');

        cy.get('#poi_accepts_credit_cards').check({ force: true });
        cy.get('#credit_cards_info').should('not.be.hidden');
        cy.get('#chk_credit_card_1').check({ force: true });
        cy.get('#chk_credit_card_1').check({ force: true });

        cy.get('.btn-success').click({ force: true });

        cy.get('.alert > ul > li').should('contain.text', 'uspješno kreiran');

    })


    it('Create place with invalid information - name missing', function () {

        cy.visit('https://www.navigator.ba/');

        cy.get('[title="Kreiraj objekat"]').click();
        cy.get('h4').should('contain.text', 'Kreiraj objekat');

        cy.get('#poi_city_name').type('Sarajevo');
        cy.get('#poi_zip_code').type('71000');
        cy.get('#poi_place_id').type('Trg heroja');
        cy.get('#poi_house_number').type('8');

        cy.get('.leaflet-popup-tip-container').should('be.visible');

        cy.get('#poi_description').type('Fina azijska hrana u ugodnoj atmosferi.');

        cy.get('.category-selector-container').find("button").eq(0).click({ force: true });
        cy.get('.category-selector-row').find('select').should('be.visible').select('Hrana');
        cy.get('.category-selector-row').find('select').should('have.length', 2);

        cy.get('#working_hours_0_0').type('13');
        cy.get('#working_hours_0_1').type('22');
        cy.get('.whours_input > .btn').click();
        cy.get('.selected-whours-heading').should('be.visible');

        cy.get('#poi_phone').type('+38733123456');
        cy.get('#poi_mobile_phone').type('+38761123456');
        cy.get('#poi_web').type('www.restoranlittleasia.ba');

        cy.get('#poi_has_wifi').check({ force: true });
        cy.get('#poi_wifi_pass').should('be.enabled').type('pardon');
        cy.get('#poi_wifi_ssid').should('be.enabled').type('samo izvolite');

        cy.get('#poi_accepts_credit_cards').check({ force: true });
        cy.get('#credit_cards_info').should('not.be.hidden');
        cy.get('#chk_credit_card_1').check({ force: true });
        cy.get('#chk_credit_card_1').check({ force: true });

        cy.get('.btn-success').click({ force: true });

        cy.get('.validation-error-msg').should('contain.text', 'Forma sadrži nevalidne podatke. Molimo ispravite i pokušajte ponovo');

        cy.get('.cancel').click({ force: true });
    })
})