import { configureStore } from '@reduxjs/toolkit';

import type { IStateSchema } from './stateSchema';

import { counterSlice } from '@/entities/counter';

export function createReduxStore(initialState: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterSlice.counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
