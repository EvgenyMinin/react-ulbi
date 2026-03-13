import { Selector, createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers';

import { IError } from '@/shared/lib';

import { IArticle } from '../lib';

export const getArticleDetails = (state: RootState) => state.entities.articleDetails;

export const articleDetailsSelector: Selector<RootState, IArticle | undefined> = createSelector(
  getArticleDetails,
  ({ data }) => data
);

export const isLoadingSelector: Selector<RootState, boolean> = createSelector(
  getArticleDetails,
  ({ isLoading }) => isLoading
);

export const errorSelector: Selector<RootState, IError | undefined> = createSelector(
  getArticleDetails,
  ({ error }) => error
);
