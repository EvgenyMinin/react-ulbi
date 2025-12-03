import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import { IArticle } from 'entities/article';

import i18n from 'shared/config/i18n/i18n';

export const fetchArticleList = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
  'article/fetchArticleList',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<IArticle[]>('/articles');

      return data;
    } catch (error) {
      return rejectWithValue(i18n.t('errorPage'));
    }
  }
);
