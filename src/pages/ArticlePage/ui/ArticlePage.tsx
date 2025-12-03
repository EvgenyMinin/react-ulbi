import { memo } from 'react';

import { useAppSelector } from 'app/providers';

import { ArticleViewSelector, fetchArticleListSelectors } from 'features/fetch-article-list';

import { ArticleList } from 'entities/article';

import { useChangeView, useFetchArticleList } from '../hooks';

const ArticlePage = () => {
  useFetchArticleList();

  const articles = useAppSelector(fetchArticleListSelectors.articleListSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleListSelectors.isLoadingSelector);
  const view = useAppSelector(fetchArticleListSelectors.articleViewSelector);

  const onChangeView = useChangeView();

  return (
    <>
      <ArticleViewSelector onViewClick={onChangeView} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </>
  );
};

export default memo(ArticlePage);
