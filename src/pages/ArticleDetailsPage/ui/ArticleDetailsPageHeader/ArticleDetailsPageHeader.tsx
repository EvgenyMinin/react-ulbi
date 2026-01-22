import React, { memo, useCallback } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'app/providers';

import { articleDetailsSelectors } from 'entities/article';

import { RoutePath } from 'shared/config';
import { Button } from 'shared/ui';

import styles from './ArticleDetailsPageHeader.module.scss';
import { canEditArticleSelector } from '../../model';

type TArticleDetailsPageHeaderProps = {
  className?: string;
};

export const ArticleDetailsPageHeader = memo((props: TArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const canEdit = useAppSelector(canEditArticleSelector);
  const article = useAppSelector(articleDetailsSelectors.articleDetailsSelector);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={cn(styles.articleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>{t('buttons.backToList')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('buttons.edit')}</Button>}
    </div>
  );
});
