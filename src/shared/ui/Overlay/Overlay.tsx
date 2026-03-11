import React, { memo } from 'react';

import cn from 'classnames';

import styles from './Overlay.module.scss';

type TOverlayProps = {
  onClick?: () => void;
  className?: string;
};

export const Overlay = memo((props: TOverlayProps) => {
  const { onClick, className } = props;

  return <div onClick={onClick} className={cn(styles.overlay, {}, [className])} />;
});
