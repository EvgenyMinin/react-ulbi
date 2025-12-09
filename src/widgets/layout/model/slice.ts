import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TScrollState } from '../lib';

const initialState: TScrollState = {
  scroll: {},
};

const layoutSlice = createSlice({
  name: 'widgets/layout',
  initialState,

  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions, reducer } = layoutSlice;
