import { createSelector } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';

import { RootState } from 'app/providers';

import { IUser, IUserSchema } from '../lib';

export const userSelector = (state: RootState): IUserSchema => state.entities.user;

export const userAuthData: Selector<RootState, IUser | undefined> = createSelector(
  userSelector,
  ({ authData }) => authData
);

export const isInitializedSelector: Selector<RootState, boolean> = createSelector(
  userSelector,
  ({ isInitialized }) => isInitialized
);
