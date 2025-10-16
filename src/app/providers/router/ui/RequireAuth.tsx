import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'app/providers';

import { userSelectors } from 'entities/user';

import { RoutePath } from 'shared/config';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuth = useAppSelector(userSelectors.userAuthData);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
