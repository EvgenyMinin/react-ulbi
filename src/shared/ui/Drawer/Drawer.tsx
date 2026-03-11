import React, { ReactNode } from 'react';

import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { Mods } from 'shared/lib';

import styles from './Drawer.module.scss';
import { Overlay } from '../Overlay';
import { Portal } from '../portal';

type TDrawerProps = {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
};

export const Drawer = (props: TDrawerProps) => {
  const { children, isOpen, onClose, className } = props;

  const theme = useTheme();

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={cn(styles.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
