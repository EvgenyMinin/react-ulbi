import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from 'shared/consts';

import { IUser, IUserSchema } from '../lib';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'entities/user',
  initialState,

  reducers: {
    setAuthData: (state, { payload }: PayloadAction<IUser>) => {
      state.authData = payload;
    },

    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },

    logOut: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions, reducer } = userSlice;
