import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlePage } from 'pages/ArticlePage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

import { EUserRole } from 'entities/user';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: EUserRole[];
};

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles',
  [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
  [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [EAppRoutes.ADMIN_PANEL]: '/admin',
  [EAppRoutes.FORBIDDEN]: '/forbidden',
  [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, TAppRoutesProps> = {
  [EAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [EAppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [EAppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  [EAppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlePage />,
    authOnly: true,
  },

  [EAppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articles}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  [EAppRoutes.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  [EAppRoutes.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  [EAppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [EUserRole.MANAGER, EUserRole.ADMIN],
  },

  [EAppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },

  [EAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
