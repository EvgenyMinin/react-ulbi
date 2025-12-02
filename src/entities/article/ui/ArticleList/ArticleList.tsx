import React, { memo } from 'react';

import cn from 'classnames';

import styles from './ArticleList.module.scss';
import { IArticle } from '../../lib';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

type TArticleListProps = {
  articles: IArticle[];
  className?: string;
  isLoading?: boolean;
  view?: 'big' | 'small';
};

const getSkeletons = (view: 'small' | 'big') =>
  new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: TArticleListProps) => {
  const { className, articles, view = 'small', isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(styles.articleList, {}, [className, styles[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: IArticle) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  return (
    <div className={cn(styles.articleList, {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
