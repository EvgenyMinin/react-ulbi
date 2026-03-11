import React, { memo, useReducer } from 'react';

import { cilBell } from '@coreui/icons';
import { BrowserView, MobileView } from 'react-device-detect';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';

import { NotificationList } from 'entities/notification';

import { Button, Drawer, EButtonTheme, Popover } from 'shared/ui';

import styles from './NotificationButton.module.scss';

type TNotificationButtonProps = {
  className?: string;
};

export const NotificationButton = memo((props: TNotificationButtonProps) => {
  const { className } = props;

  const [isOpen, toggleOpen] = useReducer(prev => !prev, false);

  const trigger = (
    <Button onClick={toggleOpen} theme={EButtonTheme.CLEAR}>
      <CIcon icon={cilBell} width={20} color='var(--inverted-primary-color)' />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover trigger={trigger} className={cn('', {}, [className])}>
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={toggleOpen}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
