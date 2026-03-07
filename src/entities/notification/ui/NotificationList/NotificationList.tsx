import React, { memo } from 'react';

import cn from 'classnames';

import { Skeleton, VStack } from 'shared/ui';

import { useGetNotificationsQuery } from '../../api';
import { NotificationItem } from '../NotificationItem';

type TNotificationListProps = {
  className?: string;
};

export const NotificationList = memo((props: TNotificationListProps) => {
  const { className } = props;
  const { isLoading, data } = useGetNotificationsQuery(null, { pollingInterval: 10000 });

  if (isLoading) {
    return (
      <VStack gap={8} className={cn('', {}, [className])}>
        <Skeleton width='100%' border='8px' height={150} />
        <Skeleton width='100%' border='8px' height={150} />
        <Skeleton width='100%' border='8px' height={150} />
      </VStack>
    );
  }

  return (
    <VStack gap={8} className={cn('', {}, [className])}>
      {data?.map(item => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
