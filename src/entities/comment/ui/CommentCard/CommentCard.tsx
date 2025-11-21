import React, { memo } from 'react';

import { Skeleton, Text } from 'shared/ui';

import styles from './CommentCard.module.scss';
import { TCommentItem } from '../../lib';

type TCommentCardProps = {
  comment: TCommentItem;
  isLoading?: boolean;
};

export const CommentCard = memo((props: TCommentCardProps) => {
  const { comment, isLoading } = props;

  if (isLoading) {
    return <Skeleton height='94px' />;
  }

  return (
    <div className={styles.commentCard}>
      <Text title={comment.user.username} />

      <Text text={comment.text} />
    </div>
  );
});
