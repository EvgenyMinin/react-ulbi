import { Selector, createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers';

import { IProfile } from 'entities/profile';

import { IError } from 'shared/lib';

import { EValidateProfileError } from '../lib/types';

export const getProfileState = (state: RootState) => state.features.profile;

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

export const profileValidateErrorsSelector: Selector<RootState, EValidateProfileError[]> =
  createSelector(getProfileState, ({ validateErrors }) => validateErrors ?? []);
