import { memo } from 'react';

import { useAppSelector } from 'app/providers';

import { Layout } from 'widgets/layout';

import { ArticleViewSelector, fetchArticleListSelectors } from 'features/fetch-article-list';

import { ArticleList } from 'entities/article';

import { useChangeView, useFetchArticleList } from '../hooks';

const ArticlePage = () => {
  const { onLoadNextPart } = useFetchArticleList();

  const articles = useAppSelector(fetchArticleListSelectors.articleListSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleListSelectors.isLoadingSelector);
  const view = useAppSelector(fetchArticleListSelectors.articleViewSelector);

  const onChangeView = useChangeView();

  return (
    <Layout onScrollEnd={onLoadNextPart}>
      <ArticleViewSelector onViewClick={onChangeView} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Layout>
  );
};

export default memo(ArticlePage);
