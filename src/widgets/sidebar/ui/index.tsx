import { useMemo, useState } from 'react';

import { cilHome, cilMonitor } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import {
  AppLink,
  AppLinkTheme,
  Button,
  EButtonSize,
  EButtonTheme,
  LangSwitcher,
  ThemeSwitcher,
} from 'shared/ui';

import styles from './styles.module.scss';

export const Sidebar = () => {
  const { t } = useTranslation('navbar');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  const menu = useMemo(() => {
    if (collapsed) {
      return (
        <div className={styles.iconContainer}>
          <CIcon icon={cilHome} width={24} className={styles.icon} />
          <CIcon icon={cilMonitor} width={24} className={styles.icon} />
        </div>
      );
    }

    return (
      <>
        <div className={styles.navItem}>
          <CIcon icon={cilHome} width={24} className={styles.icon} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            {t('main')}
          </AppLink>
        </div>
        <div className={styles.navItem}>
          <CIcon icon={cilMonitor} width={24} className={styles.icon} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            {t('about')}
          </AppLink>
        </div>
      </>
    );
  }, [collapsed, t]);

  return (
    <div
      className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [])}
      data-testid='sidebar'
    >
      <Button
        className={styles.collapseButton}
        onClick={handleToggle}
        theme={EButtonTheme.BACKGROUND_INVERTED}
        isSquare
        size={EButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.items}>{menu}</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
