import { FC, useReducer } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { LoginModal } from 'features/login-by-username';

import { userSelectors, userSlice } from 'entities/user';

import { Button, EButtonTheme } from 'shared/ui';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');

  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(userSelectors.userAuthData);

  const [isOpen, toggleOpen] = useReducer(prev => !prev, false);

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  if (userAuth) {
    return (
      <div className={cn(styles.navbar, {}, [className])}>
        <Button className={styles.links} theme={EButtonTheme.CLEAR_INVERTED} onClick={handleLogOut}>
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button className={styles.links} theme={EButtonTheme.CLEAR_INVERTED} onClick={toggleOpen}>
        {t('login')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={toggleOpen} />
    </div>
  );
};
