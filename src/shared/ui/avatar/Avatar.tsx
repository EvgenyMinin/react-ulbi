import React, { CSSProperties, FC, useMemo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type TAvatarProps = {
  src?: string;
  size?: number;
  alt?: string;
  className?: string;
};

export const Avatar: FC<TAvatarProps> = ({ src, size = 100, alt, className }) => {
  const inlineStyles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

  if (!src) {
    return null;
  }

  return (
    <img src={src} style={inlineStyles} alt={alt} className={cn(styles.avatar, {}, [className])} />
  );
};
