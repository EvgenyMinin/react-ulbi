import React, { memo } from 'react';

import { Skeleton, Text, VStack } from 'shared/ui';

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
    <VStack gap={8} className={styles.commentCard}>
      <Text title={comment.user.username} />

      <Text text={comment.text} />
    </VStack>
  );
});
