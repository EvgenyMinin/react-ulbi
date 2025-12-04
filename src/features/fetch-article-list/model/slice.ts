import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EArticleView, IArticle } from 'entities/article';

import { IError } from 'shared/lib';

import { articleListAdapter } from './adapter';
import { TArticleListState } from '../lib';
import { fetchArticleList } from '../services/fetchArticleList';

const articleListSlice = createSlice({
  name: 'features/article-list',
  initialState: articleListAdapter.getInitialState<TArticleListState>({
    isLoading: false,
    view: EArticleView.SMALL,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<EArticleView>) => {
      state.view = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setLimit: (state, { payload }: PayloadAction<number>) => {
      state.limit = payload;
    },
    setHasMore: (state, { payload }: PayloadAction<boolean>) => {
      state.hasMore = payload;
    },
    initState: state => {
      state.limit = state.view === EArticleView.BIG ? 4 : 9;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, { payload }: PayloadAction<IArticle[]>) => {
        articleListAdapter.addMany(state, payload);
        state.isLoading = false;
        state.hasMore = payload.length > 0;
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions, reducer } = articleListSlice;
