import { useCallback, useEffect } from 'react';

import { useAppDispatch } from '@/app/providers';

import { fetchNextArticleListPage, initArticlesPage } from '@/features/fetch-article-list';

type TReturnType = {
  onLoadNextPart: () => void;
};

export const useFetchArticleList = (): TReturnType => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticleListPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  return { onLoadNextPart };
};
