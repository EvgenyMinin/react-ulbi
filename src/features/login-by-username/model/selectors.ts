import { Selector, createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers';

import { IError } from '@/shared/lib';

export const getLoginState = (state: RootState) => state.features.loginForm;

export const loginUsernameSelector: Selector<RootState, string> = createSelector(
  getLoginState,
  ({ username }) => username
);

export const loginPasswordSelector: Selector<RootState, string> = createSelector(
  getLoginState,
  ({ password }) => password
);

export const loginIsLoadingSelector: Selector<RootState, boolean> = createSelector(
  getLoginState,
  ({ isLoading }) => isLoading
);

export const loginErrorSelector: Selector<RootState, IError | undefined> = createSelector(
  getLoginState,
  ({ error }) => error
);
