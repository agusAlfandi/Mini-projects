import Test from './test';

describe('<test />', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    // cy.visit('http://localhost:3000');
    cy.mount(<Test />);
    // // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click();

    // // The new url should include "/about"
    // cy.url().should('include', '/about');

    // // The new page should contain an h1 with "About"
    cy.get('h1').contains('Home');
  });
});
