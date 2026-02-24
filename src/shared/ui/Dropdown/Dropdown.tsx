import React, { Fragment, memo, ReactNode } from 'react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cn from 'classnames';

import styles from './Dropdown.module.scss';

export type TDropDownItem = {
  disabled?: boolean;
  content?: ReactNode;
  href?: string;
  onClick?: () => void;
};

type TDropdownProps = {
  items: TDropDownItem[];
  trigger?: ReactNode;
  className?: string;
};

export const Dropdown = memo((props: TDropdownProps) => {
  const { items, trigger, className } = props;

  return (
    <Menu as='div' className={cn('', {}, [className])}>
      <MenuButton as={Fragment}>
        {({ active }) => <button className={styles.button}>{trigger}</button>}
      </MenuButton>
      <MenuItems anchor='bottom' className={styles.menu}>
        {items.map(item => (
          <MenuItem key={item.href} as={Fragment} disabled={item.disabled}>
            {({ focus }) => (
              <a
                className={cn(styles.link, { [styles.focus]: focus })}
                href={item.href}
                onClick={item.onClick}
              >
                {item.content}
              </a>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
});
