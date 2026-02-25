import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import { IProfile } from 'entities/profile';

import { validateProfileData } from './validateProfileData';
import { EValidateProfileError } from '../../lib/types';
import { profileForm } from '../selectors';

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
