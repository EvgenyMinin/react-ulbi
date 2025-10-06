import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import i18n from 'shared/config/i18n/i18n';

import { profileForm } from './selectors';
import { validateProfileData } from './services/validateProfileData';
import { EValidateProfileError, IProfile } from '../lib';

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

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<EValidateProfileError[]>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
  const formData = profileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const { data } = await extra.api.post<IProfile>('/profile', formData);

    return data;
  } catch (error) {
    return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
  }
});
