import React, { memo } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/app/providers';

import { userSelectors, userSlice } from '@/entities/user';

import { RoutePath } from '@/shared/config';
import { Dropdown } from '@/shared/ui';

type TDropdownAvatarProps = {
  className?: string;
};

export const DropdownAvatar = memo((props: TDropdownAvatarProps) => {
  const { className } = props;
  const { t } = useTranslation('navbar');

  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(userSelectors.isAdminRoleSelector);
  const isManager = useAppSelector(userSelectors.isManagerRoleSelector);

  const isAdminAvailable = isAdmin || isManager;

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <Dropdown
      trigger={t('logout')}
      items={[
        ...(isAdminAvailable ? [{ href: RoutePath.admin_panel, content: t('admin') }] : []),
        { href: RoutePath.profile, content: t('profile') },
        { content: t('logout'), onClick: handleLogOut },
      ]}
      className={cn('', {}, [className])}
    />
  );
});
