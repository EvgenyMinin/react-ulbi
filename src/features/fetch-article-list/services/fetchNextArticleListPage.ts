import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers';

import { fetchArticleList } from './fetchArticleList';
import { fetchArticleListSelectors, fetchArticleListSlice } from '../model';

export const fetchNextArticleListPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'article/fetchNextArticleListPage',
  async (_, { getState, dispatch }) => {
    const isLoading = fetchArticleListSelectors.isLoadingSelector(getState());
    const page = fetchArticleListSelectors.articleListPageSelector(getState());
    const hasMore = fetchArticleListSelectors.articleListHasMoreSelector(getState());

    if (hasMore && !isLoading) {
      const updatedPage = page + 1;

      dispatch(fetchArticleListSlice.actions.setPage(updatedPage));
      dispatch(fetchArticleList({ page: updatedPage }));
    }
  }
);
