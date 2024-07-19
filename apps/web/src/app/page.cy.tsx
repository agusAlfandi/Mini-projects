import Page from './page';

describe('<Home />', () => {
  it('mounts', () => {
    cy.mount(<Page />);
    cy.get('title').should('exist');
    cy.get('LandingPageEvent').should('exist');
  });
});
