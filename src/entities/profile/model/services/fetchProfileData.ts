import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import i18n from 'shared/config/i18n/i18n';

import { IProfile } from '../../lib';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<IProfile>('/profile');

      return data;
    } catch (error) {
      return rejectWithValue(i18n.t('invalidLogin'));
    }
  }
);
