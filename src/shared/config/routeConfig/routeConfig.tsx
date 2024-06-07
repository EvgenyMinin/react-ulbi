import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',
  [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
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
  },

  [EAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
