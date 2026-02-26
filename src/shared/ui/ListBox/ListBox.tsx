import { FC, ReactNode } from 'react';

import {
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import cn from 'classnames';

import styles from './ListBox.module.scss';
import { Button } from '../button';
import { HStack } from '../Stack';

export type TListBoxItem = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
};

type TListBoxProps = {
  items: TListBoxItem[];
  onChange: <T extends string>(value: T) => void;
  label?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  className?: string;
};

export const ListBox: FC<TListBoxProps> = props => {
  const { items, onChange, value, defaultValue, readonly, label, className } = props;

  return (
    <HListBox
      as='div'
      className={cn(styles.container, {}, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HStack gap={8} align='center'>
        {label && <span>{`${label} >`}</span>}
        <ListboxButton disabled={readonly} className={styles.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </ListboxButton>
      </HStack>
      <ListboxOptions anchor='bottom' className={styles.options}>
        {items?.map(item => (
          <ListboxOption key={item.value} value={item.value} disabled={item.disabled}>
            {({ focus }) => (
              <li
                className={cn(styles.item, {
                  [styles.focus]: focus,
                  [styles.disabled]: item.disabled,
                })}
              >
                {item.content}
              </li>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HListBox>
  );
};
