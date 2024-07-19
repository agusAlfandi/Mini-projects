import Page from '../../src/app/page';

describe('<Page />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the Home page
    // cy.mount(<Page />);
    cy.visit('http://localhost:3000');

    // The new page should contain an h1 with "Home"
    cy.get('title').should('exist');

    // Validate that a link with the expected URL is present
    // Following the link is better suited to an E2E test
    cy.get('LandingPageEvent').should('exist');
    // cy.get('a[href="/about"]').should('be.visible');
  });
});

// describe('<Test />', () => {
//   it('should navigate to the about page', () => {
//     // Start from the index page
//     cy.visit('http://localhost:3000');
//     // cy.mount(<Test />);

//     // Find a link with an href attribute containing "about" and click it
//     cy.get('a[href*="about"]').click();

//     // The new url should include "/about"
//     cy.url().should('include', '/about');

//     // The new page should contain an h1 with "About"
//     cy.get('h1').contains('About');
//   });
// });
