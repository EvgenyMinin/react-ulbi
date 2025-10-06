import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ECurrency } from 'shared/lib';
import { Select } from 'shared/ui';

import { CURRENCIES } from '../mock';

type TCurrencySelectProps = {
  readonly?: boolean;
  value?: string;
  onChange?: (value: ECurrency) => void;
};

export const CurrencySelect = memo(({ onChange, ...rest }: TCurrencySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (currencyValue: string) => {
      onChange?.(currencyValue as ECurrency);
    },
    [onChange]
  );

  return (
    <Select label={t('currencyLabel')} options={CURRENCIES} onChange={onChangeHandler} {...rest} />
  );
});
