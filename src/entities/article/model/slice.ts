import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError } from '@/shared/lib';

import { fetchArticleById } from './services';
import { IArticle, IArticleDetailsSchema } from '../lib';

const initialState: IArticleDetailsSchema = {
  isLoading: true,
};

export const articleDetailsSlice = createSlice({
  name: 'entities/articleDetails',
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<IArticle>) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as IError;
      });
  },
});

export const { actions, reducer } = articleDetailsSlice;
