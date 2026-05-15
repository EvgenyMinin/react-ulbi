import { selectByTestId } from '../../helpers';

describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Пользователь открывает страницу профиля', () => {
      cy.visit('/profile');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/some-page');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });

    it('Пользователь открывает страницу профиля', () => {
      cy.visit('/profile');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на список статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticleListPage')).should('exist');
    });
  });
});
