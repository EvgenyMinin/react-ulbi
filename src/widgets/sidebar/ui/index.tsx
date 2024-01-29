import { useState } from 'react';

import cn from 'classnames';

import { LangSwitcher, ThemeSwitcher } from 'shared/ui';

import styles from './styles.module.scss';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [])}>
      <button onClick={handleToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
