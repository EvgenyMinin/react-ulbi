import { Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

import { RequireAuth } from './RequireAuth';
import { routeConfig, TAppRoutesProps } from '../config/routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: TAppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
