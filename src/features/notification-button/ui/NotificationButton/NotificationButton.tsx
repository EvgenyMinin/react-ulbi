import React, { memo } from 'react';

import { cilBell } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';

import { NotificationList } from 'entities/notification';

import { Button, EButtonTheme, Popover } from 'shared/ui';

import styles from './NotificationButton.module.scss';

type TNotificationButtonProps = {
  className?: string;
};

export const NotificationButton = memo((props: TNotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      trigger={
        <Button theme={EButtonTheme.CLEAR}>
          <CIcon icon={cilBell} width={20} color='var(--inverted-primary-color)' />
        </Button>
      }
      className={cn('', {}, [className])}
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
});
