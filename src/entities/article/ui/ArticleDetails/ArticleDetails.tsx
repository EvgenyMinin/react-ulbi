import React from 'react';

import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { ETextAlign, Skeleton, Text } from 'shared/ui';

import styles from './ArticleDetails.module.scss';
import { useFetchArticleById } from '../../hooks';
import { articleDetailsSelectors } from '../../model';

type TArticleDetailsProps = {
  articleId: string;
};

export const ArticleDetails = ({ articleId }: TArticleDetailsProps) => {
  const { t } = useTranslation('article');

  // const isLoading = useAppSelector(articleDetailsSelectors.isLoadingSelector);
  const isLoading = true;
  const article = useAppSelector(articleDetailsSelectors.articleDetailsSelector);
  const error = useAppSelector(articleDetailsSelectors.errorSelector);

  useFetchArticleById(articleId);

  if (isLoading) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton width={200} height={200} border='50%' className={styles.avatar} />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width='100%' height={200} />
        <Skeleton width='100%' height={200} />
      </div>
    );
  }

  if (error) {
    return <Text text={t('error')} align={ETextAlign.CENTER} />;
  }

  return <div className={styles.ArticleDetails}>ArticleDetails123</div>;
};
