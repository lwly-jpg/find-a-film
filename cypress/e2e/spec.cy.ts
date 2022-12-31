describe('Search function', () => {
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
})