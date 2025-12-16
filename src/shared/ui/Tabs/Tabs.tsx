import React, { memo, ReactNode, useCallback } from 'react';

import cn from 'classnames';

import styles from './Tabs.module.scss';
import { Card } from '../Card';

export type TTabItem = {
  value: string;
  content: ReactNode;
};

type TTabsProps = {
  tabs: TTabItem[];
  onTabClick: (tab: TTabItem) => void;
  className?: string;
};

export const Tabs = memo((props: TTabsProps) => {
  const { className, tabs, onTabClick } = props;

  const onClick = useCallback(
    (tab: TTabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={cn(styles.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card key={tab.value} onClick={onClick(tab)}>
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
