describe('Conducting a search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it("displays result header", () => {
    cy.get(".searchbar").type("avatar")
    cy.get(".searchbar__submit").click();

    cy.contains(".results__message","Results for avatar")
  })

  it("displays no result header for search yielding no results", () => {
    cy.get(".searchbar").type("]")
    cy.get(".searchbar__submit").click();

    cy.contains(".results__message","Sorry no results")
  })

  it("displays custom message when search contains no user input", () => {
    cy.get(".searchbar")
    cy.get(".searchbar__submit").click();

    cy.contains(".results__message","Must input a search")
  })

  it("displays result sort label and buttons", () => {
  cy.get(".searchbar").type("terminator")
  cy.get(".searchbar__submit").click();

  cy.get(".sort__options").contains("Sort by:")
  cy.get(".sort__options").find("button.sort__button").should('have.length',2)  
  })

  it("does not display result container for invalid search", () => {
    cy.get(".searchbar").type("'")
    cy.get(".searchbar__submit").click();
  
    cy.get(".results__container").should('be.empty')
  })

  it("does not display result container for empty search", () => {
    cy.get(".searchbar")
    cy.get(".searchbar__submit").click();
  
    cy.get(".results__container").should('be.empty')
  })

  it("after initial search, it shows release year and rating sort buttons", () => {
    cy.get(".searchbar").type("michael clayton")
    cy.get(".searchbar__submit").click();
  
    cy.get(".sort__options").find('button').contains('Release year')
    cy.get(".sort__options").find('button').contains("Rating")
    cy.get(".sort__options").find('button').contains("Relevance").should('not.exist')
  })

  it("after filtering results by release year, only shows rating and relevance sort buttons", () => {
    cy.get(".searchbar").type("michael clayton")
    cy.get(".searchbar__submit").click();
    cy.get(".sort__options").contains('Release year').click()

    cy.get(".sort__options").find('button').contains('Relevance')
    cy.get(".sort__options").find('button').contains("Rating")
    cy.get(".sort__options").find('button').contains("Release year").should('not.exist')
  })

  it("after filtering results by rating, only shows release year and relevance sort buttons", () => {
    cy.get(".searchbar").type("michael clayton")
    cy.get(".searchbar__submit").click();
    cy.get(".sort__options").contains('Rating').click()

    cy.get(".sort__options").find('button').contains('Relevance')
    cy.get(".sort__options").find('button').contains("Release year")
    cy.get(".sort__options").find('button').contains("Rating").should('not.exist')
  })

  it("filters results by release year", () => {
    cy.get(".searchbar").type("no country for old men")
    cy.get(".searchbar__submit").click();
    cy.get(".sort__options").contains('Release year').click()

    cy.get(".result").should('have.length', 4)
    cy.get(".result__minor-info").first().contains("2018")
    cy.get(".result__minor-info").last().contains("2007")
  })

  it("filters results by rating", () => {
    cy.get(".searchbar").type("monsters inc")
    cy.get(".searchbar__submit").click();
    cy.get(".sort__options").contains('Release year').click()
    cy.get(".sort__options").contains('Rating').click()

    cy.get(".result").should('have.length', 2)
    cy.get(".result__score").first().contains("7.8")
    cy.get(".result__score").last().contains("7")
  })
})