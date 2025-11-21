import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers';

import { TCommentItem } from 'entities/comment';

import i18n from 'shared/config/i18n/i18n';

export const fetchCommentsByArticleId = createAsyncThunk<
  TCommentItem[],
  string | undefined,
  ThunkConfig<string>
>('article/fetchCommentsByArticleId', async (articleId, { rejectWithValue, extra }) => {
  if (!articleId) {
    return rejectWithValue(i18n.t('errorPage'));
  }

  try {
    const { data } = await extra.api.get<TCommentItem[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    });

    return data;
  } catch (error) {
    return rejectWithValue(i18n.t('errorPage'));
  }
});
