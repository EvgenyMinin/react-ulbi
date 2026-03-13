import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Text, VStack } from '@/shared/ui';

import { TCommentItem } from '../../lib';
import { CommentCard } from '../CommentCard';

type TCommentListProps = {
  comments?: TCommentItem[];
  isLoading?: boolean;
};

export const CommentList = memo((props: TCommentListProps) => {
  const { comments, isLoading } = props;
  const { t } = useTranslation('article');

  return (
    <VStack>
      <Text title={t('comments')} />
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
        ))
      ) : (
        <Text text={t('emptyComments')} />
      )}
    </VStack>
  );
});
