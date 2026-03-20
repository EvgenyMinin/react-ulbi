import React, { memo, ReactNode } from 'react';

import { PopoverButton, PopoverPanel, Popover as HPopover } from '@headlessui/react';
import cn from 'classnames';

import styles from './Popover.module.scss';

type TPopoverProps = {
  className?: string;
  trigger?: ReactNode;
  children?: ReactNode;
};

export const Popover = memo((props: TPopoverProps) => {
  const { trigger, className, children } = props;

  return (
    <HPopover className={cn('', [className])}>
      <PopoverButton className={styles.trigger} as='div'>
        {trigger}
      </PopoverButton>
      <PopoverPanel anchor='bottom' className={styles.menu}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
});
