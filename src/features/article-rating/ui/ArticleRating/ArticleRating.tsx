import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/app/providers';

import { Rating } from '@/entities/rating';
import { userSelectors } from '@/entities/user';

import { Skeleton } from '@/shared/ui';

import { useGetArticleRatingsQuery, useRateArticleMutation } from '../../api/articleRatingAPI';

export type TArticleRatingProps = {
  articleId: string;
  className?: string;
};

const ArticleRating = memo((props: TArticleRatingProps) => {
  const { articleId, className } = props;
  const { t } = useTranslation('article');

  const userData = useAppSelector(userSelectors.userAuthData);
  const userId = userData?.id ?? '';

  const { data, isLoading } = useGetArticleRatingsQuery({
    articleId,
    userId,
  });

  const [rateArticleMutation] = useRateArticleMutation();

  const rate = data?.[0];

  const onRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          userId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
      }
    },
    [articleId, rateArticleMutation, userId]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      onRateArticle(starsCount);
    },
    [onRateArticle]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      onRateArticle(starsCount, feedback);
    },
    [onRateArticle]
  );

  if (isLoading) {
    return <Skeleton width='100%' height={120} />;
  }

  return (
    <div className={className}>
      <Rating
        onCancel={onCancel}
        onAccept={onAccept}
        title={t('articleReview')}
        feedbackTitle={t('reviewFeedback')}
        hasFeedback
        rate={rate?.rate}
      />
    </div>
  );
});

export default ArticleRating;
