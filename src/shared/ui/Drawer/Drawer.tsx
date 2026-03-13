import React, { ReactNode, useCallback, useEffect } from 'react';

import { a, useSpring, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

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

const height = window.innerHeight - 100;

export const Drawer = (props: TDrawerProps) => {
  const { children, isOpen, onClose, className } = props;

  const [{ y }, api] = useSpring(() => ({ y: height }));
  const theme = useTheme();
  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const close = useCallback(
    (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...config.stiff, velocity },
        onResolve: onClose,
      });
    },
    [api, onClose]
  );

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      if (oy < -70) {
        cancel();
      }
      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy);
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: oy, immediate: true });
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  );

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  if (!isOpen) {
    return null;
  }

  const display = y.to(py => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={cn(styles.drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </a.div>
      </div>
    </Portal>
  );
};
