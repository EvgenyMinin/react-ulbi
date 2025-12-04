import React, { memo } from 'react';

import cn from 'classnames';

import { Card, Skeleton } from 'shared/ui';

import styles from './ArticleListItem.module.scss';
import { EArticleView } from '../../lib';

type TArticleListItemSkeletonProps = {
  className?: string;
  view: EArticleView;
};

export const ArticleListItemSkeleton = memo((props: TArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === EArticleView.BIG) {
    return (
      <div className={cn(styles.articleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <Skeleton width={200} height={24} />
          <Skeleton width={150} height={24} />
          <div className={styles.controllerContainer}>
            <Skeleton width={250} height={46} />
            <Skeleton width={40} height={24} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.articleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.image} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={24} />
          <Skeleton width={40} height={24} />
        </div>
        <Skeleton width={150} height={24} />
      </Card>
    </div>
  );
});
