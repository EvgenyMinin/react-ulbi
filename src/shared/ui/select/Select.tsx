import React, { ChangeEvent, FC, useCallback } from 'react';

import cn from 'classnames';

import { TSelectOption } from '@/shared/lib';

import styles from './styles.module.scss';

type TSelectProps = {
  readonly?: boolean;
  options?: TSelectOption[];
  label?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export const Select: FC<TSelectProps> = ({
  readonly,
  label,
  value,
  className,
  options,
  onChange,
}) => {
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={cn(styles.container, {}, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}

      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {options?.map(({ value: optionValue, content }) => (
          <option key={optionValue} value={optionValue} className={styles.option}>
            {content}
          </option>
        ))}
      </select>
    </div>
  );
};
