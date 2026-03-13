import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IError } from '@/shared/lib';

import { loginByUsername } from './services';
import { ILoginSchema } from '../lib';

const initialState: ILoginSchema = {
  isLoading: false,
  username: '',
  password: '',
  error: {
    message: '',
  },
};

const loginSliceTest = createSlice({
  name: 'features/login-by-username',
  initialState,

  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions, reducer } = loginSliceTest;
