import React, { memo } from 'react';

import { cilBorderAll, cilList } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';

import { EArticleView } from 'entities/article';

import { Button, EButtonTheme } from 'shared/ui';

import styles from './ArticleViewSelector.module.scss';

type TArticleViewSelectorProps = {
  className?: string;
  onViewClick?: (view: EArticleView) => void;
};

const viewTypes = [
  {
    view: EArticleView.SMALL,
    icon: cilBorderAll,
  },
  {
    view: EArticleView.BIG,
    icon: cilList,
  },
];

export const ArticleViewSelector = memo((props: TArticleViewSelectorProps) => {
  const { className, onViewClick } = props;

  const onClick = (newView: EArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={cn(styles.articleViewSelector, {}, [className])}>
      {viewTypes.map(({ icon, view }) => (
        <Button key={view} theme={EButtonTheme.CLEAR} onClick={onClick(view)}>
          <CIcon icon={icon} width={24} />
        </Button>
      ))}
    </div>
  );
});
