import { FC } from 'react';

import cn from 'classnames';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}></div>
    </div>
  );
};
