import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'entities/counter';

import type { IStateSchema } from './stateSchema';

export function createReduxStore(initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterSlice.counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
