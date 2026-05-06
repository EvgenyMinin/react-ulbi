import React, { CSSProperties, FC, useMemo } from 'react';

import { cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

type TAvatarProps = {
  src?: string;
  size?: number;
  alt?: string;
  className?: string;
};

export const Avatar: FC<TAvatarProps> = ({ src, size = 100, alt, className }) => {
  const inlineStyles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

  const errorFallback = <CIcon icon={cilUser} width={size} height={size} />;
  const fallback = <Skeleton width={size} height={size} border='50%' />;

  if (!src) {
    return null;
  }

  return (
    <AppImage
      src={src}
      style={inlineStyles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
      className={cn(styles.avatar, {}, [className])}
    />
  );
};
