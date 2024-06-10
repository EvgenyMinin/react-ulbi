import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from './services';
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
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
