
import 'cypress-axe';

Cypress.Commands.add('checkFrontend', () => {
  const frontendUrl = Cypress.config('baseUrl');
  
  cy.request({
    url: frontendUrl,
    failOnStatusCode: false
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error('Frontend is not accessible');
    }
  });
});

Cypress.Commands.add('checkBackend', () => {
  const apiConfig = Cypress.env('apiConfig');
  const { url, auth, bodyCypressConfig } = apiConfig;

  cy.request({
    method: 'POST',
    url: url,
    headers: {
      'Authorization': 'Basic ' + btoa(`${auth.username}:${auth.password}`), // Basic Auth
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyCypressConfig,
    failOnStatusCode: false
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error('Backend is not accessible');
    }
  });
});



