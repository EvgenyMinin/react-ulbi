import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError } from 'shared/lib';

import { fetchProfileData, updateProfileData } from './services';
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
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
        state.data = payload;
        state.form = payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      })
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
