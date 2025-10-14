import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlePage } from 'pages/ArticlePage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles',
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

  [EAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
