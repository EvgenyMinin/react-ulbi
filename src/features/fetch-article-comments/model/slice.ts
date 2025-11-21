import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCommentItem } from 'entities/comment';

import { IError } from 'shared/lib';

import { commentsAdapter } from './adapter';
import { TArticleCommentsState } from '../lib';
import { fetchCommentsByArticleId } from '../services';

const fetchArticleCommentsSlice = createSlice({
  name: 'feature/fetch-article-comments',
  initialState: commentsAdapter.getInitialState<TArticleCommentsState>({
    isLoading: false,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, { payload }: PayloadAction<TCommentItem[]>) => {
          commentsAdapter.setAll(state, payload);
          state.isLoading = false;
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions, reducer } = fetchArticleCommentsSlice;
