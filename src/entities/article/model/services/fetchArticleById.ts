import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import i18n from 'shared/config/i18n/i18n';

import { IArticle } from '../../lib';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<IArticle>(`/articles/${articleId}`);

      return data;
    } catch (error) {
      return rejectWithValue(i18n.t('errorPage'));
    }
  }
);
