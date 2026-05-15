import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';

import cn from 'classnames';

import { useInfiniteScroll } from '@/shared/hooks';

import styles from './Layout.module.scss';
import { useScroll } from '../../hooks';

type TLayoutProps = {
  children: ReactNode;
  dataTestId?: string;
  className?: string;
  onScrollEnd?: () => void;
};

export const Layout = memo((props: TLayoutProps) => {
  const { children, dataTestId, className, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  const { onScroll } = useScroll({ wrapperRef });

  return (
    <section
      onScroll={onScroll}
      ref={wrapperRef}
      className={cn(styles.layout, {}, [className])}
      data-testId={dataTestId}
    >
      {children}
      {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
    </section>
  );
});
