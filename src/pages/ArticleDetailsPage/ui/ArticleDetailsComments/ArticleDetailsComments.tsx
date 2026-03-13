import React, { memo, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers';

import {
  fetchArticleCommentsSelectors,
  fetchCommentsByArticleId,
} from '@/features/fetch-article-comments';

import { CommentList } from '@/entities/comment';

type TArticleDetailsCommentsProps = {
  id: string;
};

export const ArticleDetailsComments = memo((props: TArticleDetailsCommentsProps) => {
  const { id } = props;

  const dispatch = useAppDispatch();
  const comments = useAppSelector(fetchArticleCommentsSelectors.articleCommentsSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleCommentsSelectors.isLoadingSelector);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return <CommentList isLoading={isLoading} comments={comments} />;
});
