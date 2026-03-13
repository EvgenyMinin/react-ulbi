import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { layoutSlice } from '@/widgets/layout';

import { profileSlice } from '@/features/editable-profile-card';
import { fetchArticleCommentsSlice } from '@/features/fetch-article-comments';
import { fetchArticleListSlice } from '@/features/fetch-article-list';
import { loginSlice } from '@/features/login-by-username';

import { articleDetailsSlice } from '@/entities/article';
import { counterSlice } from '@/entities/counter';
import { userSlice } from '@/entities/user';

import { $api, rtkApi } from '@/shared/api';

const entities = combineReducers({
  counter: counterSlice.counterReducer,
  user: userSlice.reducer,
  articleDetails: articleDetailsSlice.reducer,
});

const features = combineReducers({
  loginForm: loginSlice.reducer,
  fetchArticleComments: fetchArticleCommentsSlice.reducer,
  fetchArticleList: fetchArticleListSlice.reducer,
  profile: profileSlice.profileReducer,
});

const widgets = combineReducers({
  layout: layoutSlice.reducer,
});

const rootReducer = combineReducers({
  entities,
  features,
  widgets,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: IS_DEV,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }).concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: RootState;
}
