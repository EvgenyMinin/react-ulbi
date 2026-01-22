import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'app/providers';

import { Layout } from 'widgets/layout';

import { ArticleViewSelector, fetchArticleListSelectors } from 'features/fetch-article-list';

import { ArticleList } from 'entities/article';

import { RoutePath } from 'shared/config';
import { Button, EButtonTheme } from 'shared/ui';

import styles from './ArticlePage.module.scss';
import { useChangeView, useFetchArticleList } from '../hooks';

const ArticlePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('article');

  const { onLoadNextPart } = useFetchArticleList();

  const articles = useAppSelector(fetchArticleListSelectors.articleListSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleListSelectors.isLoadingSelector);
  const view = useAppSelector(fetchArticleListSelectors.articleViewSelector);

  const onChangeView = useChangeView();

  const onCreateArticle = useCallback(() => {
    navigate(RoutePath.article_create);
  }, [navigate]);

  return (
    <Layout onScrollEnd={onLoadNextPart}>
      <div className={styles.actionsWrapper}>
        <Button theme={EButtonTheme.OUTLINE} onClick={onCreateArticle}>
          {t('buttons.create')}
        </Button>
        <ArticleViewSelector onViewClick={onChangeView} />
      </div>
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Layout>
  );
};

export default memo(ArticlePage);
