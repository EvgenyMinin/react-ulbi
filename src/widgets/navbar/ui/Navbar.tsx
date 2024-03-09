import { FC, useReducer } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button, EButtonTheme, Modal } from '@/shared/ui';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');
  const [isOpen, toggleOpen] = useReducer(prev => !prev, false);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button className={styles.links} theme={EButtonTheme.CLEAR_INVERTED} onClick={toggleOpen}>
        {t('login')}
      </Button>
      <Modal isOpen={isOpen} onClose={toggleOpen}>
        <div></div>
      </Modal>
    </div>
  );
};
