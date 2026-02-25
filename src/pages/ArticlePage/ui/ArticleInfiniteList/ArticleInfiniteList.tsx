import React, { memo } from 'react';

import { useAppSelector } from 'app/providers';

import { fetchArticleListSelectors } from 'features/fetch-article-list';

import { ArticleList } from 'entities/article';

export const ArticleInfiniteList = memo(() => {
  const articles = useAppSelector(fetchArticleListSelectors.articleListSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleListSelectors.isLoadingSelector);
  const view = useAppSelector(fetchArticleListSelectors.articleViewSelector);

  return <ArticleList view={view} articles={articles} isLoading={isLoading} />;
});
