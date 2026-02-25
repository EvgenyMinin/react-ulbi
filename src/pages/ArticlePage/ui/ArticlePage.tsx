import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Layout } from 'widgets/layout';

import { ArticleViewSelector } from 'features/fetch-article-list';

import { RoutePath } from 'shared/config';
import { Button, EButtonTheme, HStack } from 'shared/ui';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import { useChangeView, useFetchArticleList } from '../hooks';

const ArticlePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('article');

  const { onLoadNextPart } = useFetchArticleList();

  const onChangeView = useChangeView();

  const onCreateArticle = useCallback(() => {
    navigate(RoutePath.article_create);
  }, [navigate]);

  return (
    <Layout onScrollEnd={onLoadNextPart}>
      <HStack align='center' justify='between'>
        <Button theme={EButtonTheme.OUTLINE} onClick={onCreateArticle}>
          {t('buttons.create')}
        </Button>
        <ArticleViewSelector onViewClick={onChangeView} />
      </HStack>
      <ArticleInfiniteList />
    </Layout>
  );
};

export default memo(ArticlePage);
