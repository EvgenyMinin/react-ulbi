import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfile, IProfileSchema } from '../lib';

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: true,
  readonly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'entities/profile',
  initialState,

  reducers: {
    setProfileData: (state, { payload }: PayloadAction<IProfile>) => {
      state.data = payload;
    },
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
