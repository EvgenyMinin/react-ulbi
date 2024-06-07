import { memo } from 'react';

import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme: AppLinkTheme;
}

export const AppLink = memo(({ children, theme, ...rest }: AppLinkProps) => {
  return (
    <Link className={cn(styles.appLink, {}, [styles[theme]])} {...rest}>
      {children}
    </Link>
  );
});
