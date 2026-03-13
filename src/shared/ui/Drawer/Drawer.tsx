import React, { memo, ReactNode, useCallback, useEffect } from 'react';

import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import { useAnimationLibs } from 'shared/lib';

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

export const DrawerContent = (props: TDrawerProps) => {
  const { children, isOpen, onClose, className } = props;

  const { Gesture, Spring } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const theme = useTheme();

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const close = useCallback(
    (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...Spring.config.stiff, velocity },
        onResolve: onClose,
      });
    },
    [Spring.config.stiff, api, onClose]
  );

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < 70) {
        cancel();
      }

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
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
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

export const Drawer = memo((props: TDrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
