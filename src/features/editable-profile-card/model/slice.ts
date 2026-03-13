import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfile } from '@/entities/profile';

import { IError } from '@/shared/lib';

import { updateProfileData } from './services';
import { IProfileSchema } from '../lib/types';

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: true,
  readonly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'feature/editable-profile-card',
  initialState,

  reducers: {
    setReadOnly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: state => {
      state.readonly = true;
      state.validateErrors = undefined;
      state.form = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(updateProfileData.pending, state => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
        state.data = payload;
        state.form = payload;
        state.isLoading = false;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
