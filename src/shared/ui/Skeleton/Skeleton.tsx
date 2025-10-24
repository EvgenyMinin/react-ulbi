import React, { CSSProperties, memo } from 'react';

import cn from 'classnames';

import styles from './Skeleton.module.scss';

type TSkeletonProps = {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
};

export const Skeleton = memo((props: TSkeletonProps) => {
  const { height, width, border, className } = props;

  const componentStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={cn(styles.Skeleton, {}, [className])} style={componentStyles} />;
});
