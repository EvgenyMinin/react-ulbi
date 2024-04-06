import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import type { IStateSchema } from './stateSchema';

import { counterSlice } from 'entities/counter';
import { userSlice } from 'entities/user';

export function createReduxStore(initialState: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterSlice.counterReducer,
    user: userSlice.reducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
