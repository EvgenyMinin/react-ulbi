import { memo, useReducer } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { DropdownAvatar } from 'features/dropdown-avatar';
import { LoginModal } from 'features/login-by-username';
import { NotificationButton } from 'features/notification-button';

import { userSelectors } from 'entities/user';

import { Button, EButtonTheme, HStack } from 'shared/ui';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const userAuth = useAppSelector(userSelectors.userAuthData);

  const [isOpen, toggleOpen] = useReducer(prev => !prev, false);

  if (userAuth) {
    return (
      <header className={cn(styles.navbar, {}, [className])}>
        <HStack gap={16} className={styles.links}>
          <NotificationButton />
          <DropdownAvatar />
        </HStack>
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
