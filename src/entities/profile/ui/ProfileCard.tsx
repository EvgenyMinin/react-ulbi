import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/country';
import { CurrencySelect } from '@/entities/currency';

import { ECountry, ECurrency, IError, Mods } from '@/shared/lib';
import { Avatar, ETextAlign, ETextTheme, HStack, Input, Loader, Text, VStack } from '@/shared/ui';

import styles from './styles.module.scss';
import { IProfile } from '../lib';

interface ProfileCardProps {
  data?: IProfile;
  isLoading?: boolean;
  error?: IError;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: ECurrency) => void;
  onChangeCountry?: (country: ECountry) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <HStack justify='center' className={cn(styles.profileCard, {}, [styles.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error?.message) {
    return (
      <HStack justify='center' className={cn(styles.profileCard, {}, [styles.error])}>
        <Text
          title={t('serverError')}
          text={t('refreshPage')}
          theme={ETextTheme.ERROR}
          align={ETextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack justify='center' className={cn(styles.profileCard, mods)}>
      {data?.avatar && (
        <HStack justify='center'>
          <Avatar src={data.avatar} />
        </HStack>
      )}

      <Input
        value={data?.firstName}
        readOnly={readonly}
        placeholder={t('firstNamePlaceholder')}
        onChange={onChangeFirstName}
      />
      <Input
        value={data?.lastName}
        readOnly={readonly}
        placeholder={t('lastNamePlaceholder')}
        onChange={onChangeLastName}
      />
      <Input
        value={data?.age?.toString()}
        readOnly={readonly}
        placeholder={t('agePlaceholder')}
        type='number'
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        readOnly={readonly}
        placeholder={t('cityPlaceholder')}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        readOnly={readonly}
        placeholder={t('usernamePlaceholder')}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        readOnly={readonly}
        placeholder={t('avatarPlaceholder')}
        onChange={onChangeAvatar}
      />

      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />

      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};
