import React, { memo } from 'react';

import cn from 'classnames';

import { Card, Text } from '@/shared/ui';

import styles from './NotificationItem.module.scss';
import { TNotificationItem } from '../../lib/types';

type TNotificationItemProps = {
  item: TNotificationItem;
  className?: string;
};

export const NotificationItem = memo((props: TNotificationItemProps) => {
  const { item, className } = props;

  const { description, title, href } = item;

  const content = (
    <Card className={cn('', {}, [className])}>
      <Text title={title} text={description} />
    </Card>
  );

  if (href) {
    <a target='_blank' rel='noreferrer' href={href} className={styles.link}>
      {content}
    </a>;
  }

  return content;
});
