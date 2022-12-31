describe('Conducting a search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it("displays result header", () => {
    cy.get(".searchbar").type("avatar")
    cy.get("[class='searchbar__submit']").click();

    cy.contains("[class='results__message']","Results for avatar")
  })

  it("displays no result header for search yielding no results", () => {
    cy.get(".searchbar").type("]")
    cy.get("[class='searchbar__submit']").click();

    cy.contains("[class='results__message']","Sorry no results")
  })

  it("displays custom message when search contains no user input", () => {
    cy.get(".searchbar")
    cy.get("[class='searchbar__submit']").click();

    cy.contains("[class='results__message']","Must input a search")
  })

  it("displays result sort label and buttons", () => {
  cy.get(".searchbar").type("terminator")
  cy.get("[class='searchbar__submit']").click();

  cy.get(".sort__options").contains("Sort by:")
  cy.get(".sort__options").find("button.sort__button").should('have.length',2)  
  })

  it("does not display result container for invalid search", () => {
    cy.get(".searchbar").type("'")
    cy.get("[class='searchbar__submit']").click();
  
    cy.get(".results__container").should('be.empty')
  })

  it("does not display result container for empty search", () => {
    cy.get(".searchbar")
    cy.get("[class='searchbar__submit']").click();
  
    cy.get(".results__container").should('be.empty')
  })
})