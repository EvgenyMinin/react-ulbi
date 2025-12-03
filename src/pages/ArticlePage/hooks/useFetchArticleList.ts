import { useEffect } from 'react';

import { useAppDispatch } from 'app/providers';

import { fetchArticleListServices } from 'features/fetch-article-list';

export const useFetchArticleList = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleListServices.fetchArticleList());
  }, [dispatch]);
};
