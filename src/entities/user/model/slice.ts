import { createSlice } from '@reduxjs/toolkit';

import { IUserSchema } from '../lib';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'entities/user',
  initialState,

  reducers: {},
});

export const { actions, reducer } = userSlice;
