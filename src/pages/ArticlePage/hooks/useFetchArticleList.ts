import { useCallback, useEffect } from 'react';

import { useAppDispatch } from 'app/providers';

import {
  fetchArticleList,
  fetchArticleListSlice,
  fetchNextArticleListPage,
} from 'features/fetch-article-list';

type TReturnType = {
  onLoadNextPart: () => void;
};

export const useFetchArticleList = (): TReturnType => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticleListPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticleListSlice.actions.initState());
    dispatch(fetchArticleList({ page: 1 }));
  }, [dispatch]);

  return { onLoadNextPart };
};
