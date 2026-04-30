import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@/shared/lib';

import { ICounterSchema } from '../lib';

export const initialState: ICounterSchema = {
  value: 0,
};

const counterSlice = buildSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: state => {
      state.value += 1;
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
