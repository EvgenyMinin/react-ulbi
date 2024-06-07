import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { loginSlice } from 'features/login-by-username';

import { counterSlice } from 'entities/counter';
import { profileReducer } from 'entities/profile';
import { userSlice } from 'entities/user';

const entities = combineReducers({
  counter: counterSlice.counterReducer,
  user: userSlice.reducer,
  profile: profileReducer,
});
const features = combineReducers({
  loginForm: loginSlice.reducer,
});

const rootReducer = combineReducers({
  entities,
  features,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: IS_DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
