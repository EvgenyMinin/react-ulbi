import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser, userSlice } from 'entities/user';

import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post<IUser>('http://localhost:8000/login', authData);

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
      dispatch(userSlice.actions.setAuthData(data));

      return data;
    } catch (error) {
      return rejectWithValue(i18n.t('invalidLogin'));
    }
  }
);
