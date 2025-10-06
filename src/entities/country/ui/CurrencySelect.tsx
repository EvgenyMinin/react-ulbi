import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ECountry } from 'shared/lib';
import { Select } from 'shared/ui';

import { COUNTRIES } from '../mock';

type TCountrySelectProps = {
  readonly?: boolean;
  value?: string;
  onChange?: (value: ECountry) => void;
};

export const CountrySelect = memo(({ onChange, ...rest }: TCountrySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (countryValue: string) => {
      onChange?.(countryValue as ECountry);
    },
    [onChange]
  );

  return (
    <Select label={t('countryLabel')} options={COUNTRIES} onChange={onChangeHandler} {...rest} />
  );
});
