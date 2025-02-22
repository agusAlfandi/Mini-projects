import { defineConfig } from 'cypress';

export default defineConfig({
  // defaultCommandTimeout: 8000,
  // pageLoadTimeout: 10000,
  e2e: {
    // baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    // specPattern: 'src/app/*.cy.{js,jsx,ts,tsx}', // Set the spec pattern here
  },
});
