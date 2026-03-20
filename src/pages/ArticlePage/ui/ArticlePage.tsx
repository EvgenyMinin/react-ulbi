import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Layout } from '@/widgets/layout';

import { ArticleViewSelector } from '@/features/fetch-article-list';

import { Rating } from '@/entities/rating';

import { RoutePath } from '@/shared/config';
import { Button, EButtonTheme, HStack, VStack } from '@/shared/ui';

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
      <Rating title='Как вам статья?' feedbackTitle='Оставте ваш отзыв о статье' hasFeedback />
      <VStack gap={16}>
        <HStack align='center' justify='between'>
          <Button theme={EButtonTheme.OUTLINE} onClick={onCreateArticle}>
            {t('buttons.create')}
          </Button>

          <ArticleViewSelector onViewClick={onChangeView} />
        </HStack>

        <ArticleInfiniteList />
      </VStack>
    </Layout>
  );
};

export default memo(ArticlePage);
