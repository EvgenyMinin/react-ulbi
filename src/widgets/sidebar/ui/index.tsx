import { memo, useMemo, useState } from 'react';

import cn from 'classnames';

import { Button, EButtonSize, EButtonTheme, LangSwitcher, ThemeSwitcher } from 'shared/ui';

import { SidebarItem } from './sidebar-item';
import styles from './styles.module.scss';
import { SidebarItemsList } from '../model/items';

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  const menu = useMemo(() => {
    if (collapsed) {
      return (
        <>
          {SidebarItemsList.map(item => (
            <SidebarItem key={item.path} item={item} collapsed />
          ))}
        </>
      );
    }

    return (
      <>
        {SidebarItemsList.map(item => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </>
    );
  }, [collapsed]);

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
        data-testid='toggle-sidebar'
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
});
