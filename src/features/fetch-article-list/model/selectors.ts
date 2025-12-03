import { createSelector, Selector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers';

import { EArticleView } from 'entities/article';

import { IError } from 'shared/lib';

import { articleListAdapter } from './adapter';

export const articleListSelector = articleListAdapter.getSelectors<RootState>(
  (state: RootState) => state.features.fetchArticleList
);

export const isLoadingSelector: Selector<RootState, boolean> = createSelector(
  (state: RootState) => state.features.fetchArticleList,
  ({ isLoading }) => isLoading
);

export const errorSelector: Selector<RootState, IError | undefined> = createSelector(
  (state: RootState) => state.features.fetchArticleList,
  ({ error }) => error
);

export const articleViewSelector: Selector<RootState, EArticleView> = createSelector(
  (state: RootState) => state.features.fetchArticleList,
  ({ view }) => view
);
