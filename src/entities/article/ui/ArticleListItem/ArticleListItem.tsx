import React, { memo, useCallback } from 'react';

import { cilLowVision } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from '@/shared/consts';
import { useHover } from '@/shared/hooks';
import { Button, Card, HStack, Text } from '@/shared/ui';

import styles from './ArticleListItem.module.scss';
import { EArticleView, IArticle } from '../../lib';

type TArticleListItemProps = {
  article: IArticle;
  className?: string;
  view: EArticleView;
};

export const ArticleListItem = memo((props: TArticleListItemProps) => {
  const { className, article, view } = props;
  const navigate = useNavigate();
  const { t } = useTranslation('article');

  const [, bindHover] = useHover();

  const useOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const title = <Text text={article.title} className={styles.title} />;
  const views = (
    <HStack gap={8}>
      <CIcon icon={cilLowVision} width={24} />
      <Text text={article.views} />
    </HStack>
  );

  if (view === EArticleView.BIG) {
    return (
      <div className={cn('', {}, [className, styles[view]])}>
        <Card className={styles.card}>
          {title}
          {types}
          <div className={styles.controllerContainer}>
            <Button onClick={useOpenArticle}>{t('buttons.more')}</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div {...bindHover} className={cn('', {}, [className, styles[view]])}>
      <Card className={styles.card} onClick={useOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt={article.title} className={styles.image} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <HStack justify='between' gap={4}>
          {types}
          {views}
        </HStack>
        {title}
      </Card>
    </div>
  );
});
