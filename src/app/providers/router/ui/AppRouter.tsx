import { Suspense, useMemo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from 'app/providers';

import { PageLoader } from 'widgets/page-loader';

import { userSelectors } from 'entities/user';

import { routeConfig } from 'shared/config';

export const AppRouter = () => {
  const isAuth = useAppSelector(userSelectors.userAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter(({ authOnly }) => {
        if (authOnly && !isAuth) {
          return false;
        }

        return true;
      }),
    [isAuth]
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};
