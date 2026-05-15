import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/consts';

export const login = (username: string, password: string) => {
  cy.log(`Logging in as ${username}`);

  cy.env(['AUTH0_CLIENT_SECRET']).then(() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        grant_type: 'password',
        username,
        password,
      },
    }).then(({ body }) => {
      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));

      cy.visit('/');
    });
  });
};
