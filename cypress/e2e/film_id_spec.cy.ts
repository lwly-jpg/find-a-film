/// <reference types="cypress" />
// @ts-check

describe('Selecting an individual film from search results', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it("navigates to film id page", () => {
    cy.get('.searchbar').type('top gun');
    cy.get('.searchbar__submit').click();
    cy.get('.result__info').find('.result__title').first().click();


    cy.url().should('include', '/film/361743');
    cy.get("h1:contains('Top Gun: Maverick')");
  });

  it('navigates back to home page via nav bar logo', () => {
    cy.get('.searchbar').type('top gun');
    cy.get('.searchbar__submit').click();
    cy.get('.result__info').find('.result__title').first().click();
    
    cy.get('nav').click();
    cy.get("h1:contains('Discover your next watch')");
  });

  it('shows similar films carousel on individual film page', () => {
    cy.get('.searchbar').type('heat');
    cy.get('.searchbar__submit').click();
    cy.get('.result__info').find('.result__title').first().click();

    cy.get('.film_carousel').should('not.be.empty');
  });
});