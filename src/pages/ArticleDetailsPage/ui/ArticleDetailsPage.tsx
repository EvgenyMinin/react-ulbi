import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/providers';

import {
  fetchArticleCommentsSelectors,
  fetchCommentsByArticleId,
} from 'features/fetch-article-comments';

import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';

import { Text } from 'shared/ui';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { id = '' } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const comments = useAppSelector(fetchArticleCommentsSelectors.articleCommentsSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleCommentsSelectors.isLoadingSelector);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <ArticleDetails articleId={id} />
      <div className={styles.commentListWrapper}>
        <Text title={t('comments')} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </div>
  );
};

export default memo(ArticleDetailsPage);
