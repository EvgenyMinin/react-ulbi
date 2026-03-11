import React, { ReactNode } from 'react';

import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { useModal } from 'shared/hooks';
import { Mods } from 'shared/lib';

import styles from './Drawer.module.scss';
import { Overlay } from '../Overlay';
import { Portal } from '../portal';

type TDrawerProps = {
  children: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  className?: string;
};

export const Drawer = (props: TDrawerProps) => {
  const { children, isOpen, lazy, onClose, className } = props;

  const theme = useTheme();
  const { close, isClosing, isMounted } = useModal({ animationDelay: 300, isOpen, onClose });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(styles.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
