describe('LandingPageEvent Component', () => {
  beforeEach(() => {
    // Assuming '/events' is the URL where LandingPageEvent is rendered
    cy.visit('http://localhost:3000');
  });

  it('loads two banner images', () => {
    cy.get('[alt="Banner"]').should('have.length', 2);
    // cy.get('[src="banner.webp"]').should('be.visible');
    // cy.get('[src="banner2.webp"]').should('be.visible');
  });

  it('displays the event introduction text', () => {
    cy.contains(
      'Ini adalah beberapa event yang mungkin membuat anda tertarik untuk ikuti:',
    ).should('be.visible');
  });

  it('displays up to three events', () => {
    cy.get('[data-testid="event-card"]').should('have.length.lessThan', 4);
  });

  // Add more tests as needed for interactivity, dynamic content, etc.
});
