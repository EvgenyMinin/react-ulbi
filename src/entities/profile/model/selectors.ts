import { Selector, createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers';

import { IError } from 'shared/lib';

import { IProfile } from '../lib';

export const getProfileState = (state: RootState) => state.entities.profile;

export const profileSelector: Selector<RootState, IProfile | undefined> = createSelector(
  getProfileState,
  ({ data }) => data
);

export const profileForm: Selector<RootState, IProfile | undefined> = createSelector(
  getProfileState,
  ({ form }) => form
);

export const profileLoading: Selector<RootState, boolean> = createSelector(
  getProfileState,
  ({ isLoading }) => isLoading
);

export const profileError: Selector<RootState, IError | undefined> = createSelector(
  getProfileState,
  ({ error }) => error
);

export const profileReadOnly: Selector<RootState, boolean> = createSelector(
  getProfileState,
  ({ readonly }) => readonly
);
