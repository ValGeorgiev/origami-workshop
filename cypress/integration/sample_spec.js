
describe('Pages scenarios', () => {
  it('Home page!', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Publications')
  })

  it('should render home page and navigate to login page', () => {
    cy.visit('http://localhost:3000')
    cy.get('header [data-test-id="link-Login"]').click()
    cy.get('h1').contains('Login')
  })

  it('Login page!', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('h1').contains('Login')
    cy.get('#username').type('valgeorgiev')
    cy.get('#password').type('password123')
    cy.get('button').click()
    cy.get('header [data-test-id="link-Profile"]')
  })
})