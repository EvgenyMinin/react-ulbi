import { useCallback } from 'react';

import { useAppDispatch } from 'app/providers';

import { fetchArticleListSlice } from 'features/fetch-article-list';

import { EArticleView } from 'entities/article';

type TReturn = {
  (view: EArticleView): void;
};

export const useChangeView = (): TReturn => {
  const dispatch = useAppDispatch();

  return useCallback(
    (view: EArticleView) => {
      dispatch(fetchArticleListSlice.actions.setView(view));
    },
    [dispatch]
  );
};
