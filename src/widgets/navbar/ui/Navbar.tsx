import { memo, useReducer } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { LoginModal } from 'features/login-by-username';

import { userSelectors, userSlice } from 'entities/user';

import { RoutePath } from 'shared/config';
import { Button, Dropdown, EButtonTheme } from 'shared/ui';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(userSelectors.userAuthData);
  const isAdmin = useAppSelector(userSelectors.isAdminRoleSelector);
  const isManager = useAppSelector(userSelectors.isManagerRoleSelector);

  const [isOpen, toggleOpen] = useReducer(prev => !prev, false);

  const isAdminAvailable = isAdmin || isManager;

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  if (userAuth) {
    return (
      <header className={cn(styles.navbar, {}, [className])}>
        <Dropdown
          trigger={t('logout')}
          items={[
            ...(isAdminAvailable ? [{ href: RoutePath.admin_panel, content: t('admin') }] : []),
            { href: RoutePath.profile, content: t('profile') },
            { content: t('logout'), onClick: handleLogOut },
          ]}
          className={styles.links}
        />
      </header>
    );
  }

  return (
    <header className={cn(styles.navbar, {}, [className])}>
      <Button className={styles.links} theme={EButtonTheme.CLEAR_INVERTED} onClick={toggleOpen}>
        {t('login')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={toggleOpen} />
    </header>
  );
});
