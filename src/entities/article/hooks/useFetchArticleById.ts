import { useEffect } from 'react';

import { useAppDispatch } from 'app/providers';

import { articleDetailsService } from '../model';

export const useFetchArticleById = (articleId: string): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(articleDetailsService.fetchArticleById(articleId));
  }, [dispatch, articleId]);
};
