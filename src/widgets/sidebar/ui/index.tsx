import { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { LangSwitcher, ThemeSwitcher } from 'shared/ui';

import styles from './styles.module.scss';

export const Sidebar = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [])}
      data-testid='sidebar'
    >
      <button onClick={handleToggle}>{t('lang')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
