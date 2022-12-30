describe('Page load', () => {
  it('clicks the nav bar link ', () => {
    cy.visit('http://localhost:3000')

    cy.get('/')
  })
})