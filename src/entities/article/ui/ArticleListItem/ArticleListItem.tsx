import React, { memo, useCallback } from 'react';

import { cilLowVision } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from 'shared/config';
import { useHover } from 'shared/hooks';
import { Card, Text } from 'shared/ui';

import styles from './ArticleListItem.module.scss';
import { IArticle } from '../../lib';

type TArticleListItemProps = {
  article: IArticle;
  className?: string;
  view: 'big' | 'small';
};

export const ArticleListItem = memo((props: TArticleListItemProps) => {
  const { className, article, view } = props;
  const navigate = useNavigate();

  const [, bindHover] = useHover();

  const useOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const title = <Text text={article.title} className={styles.title} />;
  const views = (
    <>
      <Text text={article.views} />
      <CIcon icon={cilLowVision} width={24} />
    </>
  );

  if (view === 'big') {
    return (
      <div className={cn(styles.articleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          {title}
          {types}
        </Card>
      </div>
    );
  }

  return (
    <div {...bindHover} className={cn(styles.articleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card} onClick={useOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt={article.title} className={styles.image} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        {title}
      </Card>
    </div>
  );
});
