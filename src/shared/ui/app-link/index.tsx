import { Link, LinkProps } from 'react-router-dom';

import cn from 'classnames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink: FCC<AppLinkProps> = ({
  children,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}) => {
  return (
    <Link className={cn(styles.appLink, {}, [styles[theme]])} {...rest}>
      {children}
    </Link>
  );
};
