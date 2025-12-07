import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import { fetchArticleList } from './fetchArticleList';
import { fetchArticleListSelectors, fetchArticleListSlice } from '../model';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'article/initArticlesPage',
  async (_, { getState, dispatch }) => {
    const inited = fetchArticleListSelectors.articleListInitedSelector(getState());

    if (!inited) {
      dispatch(fetchArticleListSlice.actions.initState());
      dispatch(fetchArticleList({ page: 1 }));
    }
  }
);
