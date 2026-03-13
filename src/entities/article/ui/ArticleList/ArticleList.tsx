import React, { memo } from 'react';

import cn from 'classnames';

import styles from './ArticleList.module.scss';
import { EArticleView, IArticle } from '../../lib';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

type TArticleListProps = {
  articles: IArticle[];
  view: EArticleView;
  className?: string;
  isLoading?: boolean;
};

const getSkeletons = (view: EArticleView) =>
  new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: TArticleListProps) => {
  const { className, articles, view = EArticleView.SMALL, isLoading } = props;

  return (
    <div className={cn(styles.articleList, {}, [className, styles[view]])}>
      {articles.map(article => (
        <ArticleListItem key={article.id} article={article} view={view} />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
