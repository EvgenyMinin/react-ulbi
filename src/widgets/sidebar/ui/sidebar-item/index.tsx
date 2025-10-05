import { memo } from 'react';

import CIcon from '@coreui/icons-react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { userSelectors } from 'entities/user';

import { AppLink, AppLinkTheme } from 'shared/ui';

import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

type SidebarItemProps = {
  item: SidebarItemType;
  collapsed?: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation('sidebar');
  const isAuth = useAppSelector(userSelectors.userAuthData);
  const { icon, path, text, authOnly } = item;

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={path}>
      <div className={styles.navItem}>
        <CIcon icon={icon} width={24} className={styles.icon} />
        {!collapsed && t(text)}
      </div>
    </AppLink>
  );
});
