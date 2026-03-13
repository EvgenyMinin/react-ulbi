import { useMemo } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/app/providers';

import { EUserRole, userSelectors } from '@/entities/user';

import { RoutePath } from '@/shared/config';

type TRequireAuthProps = {
  children: JSX.Element;
  roles?: EUserRole[];
};

export const RequireAuth = ({ children, roles }: TRequireAuthProps) => {
  const location = useLocation();
  const isAuth = useAppSelector(userSelectors.userAuthData);
  const userRoles = useAppSelector(userSelectors.userRolesSelector);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some(requiredRole => userRoles.includes(requiredRole));
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};
