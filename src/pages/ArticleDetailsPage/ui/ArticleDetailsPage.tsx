import { memo, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { Layout } from 'widgets/layout';

import {
  fetchArticleCommentsSelectors,
  fetchCommentsByArticleId,
} from 'features/fetch-article-comments';

import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';

import { RoutePath } from 'shared/config';
import { Button, Text } from 'shared/ui';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { id = '' } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const comments = useAppSelector(fetchArticleCommentsSelectors.articleCommentsSelector.selectAll);
  const isLoading = useAppSelector(fetchArticleCommentsSelectors.isLoadingSelector);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Button onClick={onBackToList}>{t('buttons.backToList')}</Button>
      <div className={styles.container}>
        <ArticleDetails articleId={id} />
        <div className={styles.commentListWrapper}>
          <Text title={t('comments')} />
          <CommentList isLoading={isLoading} comments={comments} />
        </div>
      </div>
    </Layout>
  );
};

export default memo(ArticleDetailsPage);
