describe('Search function', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it("gets Avatar results", () => {
    cy.get(".searchbar").type("avatar")
    cy.get("[class='searchbar__submit']").click();

    cy.contains("Results for avatar")
  })

})