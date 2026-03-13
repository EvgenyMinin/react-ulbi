import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers';

import { IArticle } from '@/entities/article';

import i18n from '@/shared/config/i18n/i18n';

import { articleListLimitSelector } from '../model/selectors';

interface IFetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  IArticle[],
  IFetchArticleListProps,
  ThunkConfig<string>
>('article/fetchArticleList', async (props, { rejectWithValue, extra, getState }) => {
  const { page = 1 } = props;
  const limit = articleListLimitSelector(getState());

  try {
    const { data } = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return data;
  } catch (error) {
    return rejectWithValue(i18n.t('errorPage'));
  }
});
