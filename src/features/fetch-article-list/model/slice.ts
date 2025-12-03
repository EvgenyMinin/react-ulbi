import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EArticleView, IArticle } from 'entities/article';

import { IError } from 'shared/lib';

import { articleListAdapter } from './adapter';
import { fetchArticleList } from './services';
import { TArticleListState } from '../lib';

const articleListSlice = createSlice({
  name: 'features/article-list',
  initialState: articleListAdapter.getInitialState<TArticleListState>({
    isLoading: false,
    view: EArticleView.SMALL,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<EArticleView>) => {
      state.view = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, { payload }: PayloadAction<IArticle[]>) => {
        articleListAdapter.setAll(state, payload);
        state.isLoading = false;
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions, reducer } = articleListSlice;
