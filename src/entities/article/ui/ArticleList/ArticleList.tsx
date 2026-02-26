import React, { memo } from 'react';

import cn from 'classnames';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';

import { LAYOUT_ID } from 'shared/consts';

import styles from './ArticleList.module.scss';
import { EArticleView, IArticle } from '../../lib';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

type TArticleListProps = {
  articles: IArticle[];
  view: EArticleView;
  className?: string;
  isLoading?: boolean;
  virtualized?: boolean;
};

const getSkeletons = (view: EArticleView) =>
  new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: TArticleListProps) => {
  const { className, articles, view = EArticleView.SMALL, isLoading, virtualized = true } = props;
  const articlesAmount = articles.length;

  const isBig = view === EArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articlesAmount : Math.ceil(articlesAmount / itemsPerRow);

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articlesAmount);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          key={articles[i].id}
          className={styles.card}
        />
      );
    }

    return (
      <div key={key} style={style} className={styles.row}>
        {items}
      </div>
    );
  };

  return (
    <WindowScroller scrollElement={document.getElementById(LAYOUT_ID) as Element}>
      {({ width, height, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        <div ref={registerChild} className={cn(styles.articleList, {}, [className, styles[view]])}>
          {virtualized ? (
            <List
              height={height ?? 160}
              rowHeight={isBig ? 160 : 300}
              width={width ? width - 80 : 700}
              rowRenderer={rowRenderer}
              rowCount={rowCount}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
              autoHeight
            />
          ) : (
            articles.map(article => (
              <ArticleListItem key={article.id} article={article} view={view} />
            ))
          )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
