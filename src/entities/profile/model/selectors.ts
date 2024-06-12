import { Selector, createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers';

import { IProfile } from '../lib';

export const getProfileState = (state: RootState) => state.entities.profile;

export const profileSelector: Selector<RootState, IProfile | undefined> = createSelector(
  getProfileState,
  ({ data }) => data
);

export const profileLoading: Selector<RootState, boolean> = createSelector(
  getProfileState,
  ({ isLoading }) => isLoading
);

export const profileError: Selector<RootState, string | undefined> = createSelector(
  getProfileState,
  ({ error }) => error
);
