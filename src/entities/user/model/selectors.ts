import { createSelector } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';

import { RootState } from 'app/providers';

import { EUserRole, IUser, IUserSchema } from '../lib';

export const userSelector = (state: RootState): IUserSchema => state.entities.user;

export const userAuthData: Selector<RootState, IUser | undefined> = createSelector(
  userSelector,
  ({ authData }) => authData
);

export const isInitializedSelector: Selector<RootState, boolean> = createSelector(
  userSelector,
  ({ isInitialized }) => isInitialized
);

export const userRolesSelector: Selector<RootState, EUserRole[]> = createSelector(
  userAuthData,
  user => user?.roles ?? []
);

export const isAdminRoleSelector: Selector<RootState, boolean> = createSelector(
  userRolesSelector,
  roles => Boolean(roles?.includes(EUserRole.ADMIN))
);

export const isManagerRoleSelector: Selector<RootState, boolean> = createSelector(
  userRolesSelector,
  roles => Boolean(roles?.includes(EUserRole.MANAGER))
);
