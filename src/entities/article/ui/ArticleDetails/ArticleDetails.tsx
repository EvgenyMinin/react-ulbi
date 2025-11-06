import React, { useCallback } from 'react';

import { cilCalendar, cilLowVision } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { EArticleBlockType, TArticleBlock } from 'entities/article/lib';

import { Avatar, ETextAlign, Skeleton, Text } from 'shared/ui';

import styles from './ArticleDetails.module.scss';
import { useFetchArticleById } from '../../hooks';
import { articleDetailsSelectors } from '../../model';
import { ArticleCodeBlock } from '../ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock';

type TArticleDetailsProps = {
  articleId: string;
};

export const ArticleDetails = ({ articleId }: TArticleDetailsProps) => {
  const { t } = useTranslation('article');

  const isLoading = useAppSelector(articleDetailsSelectors.isLoadingSelector);
  const article = useAppSelector(articleDetailsSelectors.articleDetailsSelector);
  const error = useAppSelector(articleDetailsSelectors.errorSelector);

  useFetchArticleById(articleId);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case EArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />;
      case EArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />;
      case EArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

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

  return (
    <div className={styles.ArticleDetails}>
      <Avatar size={200} src={article?.img} className={styles.avatar} />
      <Text title={article?.title} text={article?.subtitle} />

      <div className={styles.viewContainer}>
        <CIcon icon={cilLowVision} width={24} />
        <Text text={article?.views} />
      </div>

      <div className={styles.viewContainer}>
        <CIcon icon={cilCalendar} width={24} />
        <Text text={article?.createdAt} />
      </div>

      {article?.blocks.map(renderBlock)}
    </div>
  );
};
