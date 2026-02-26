import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { ProfileCard } from 'entities/profile';

import { ETextTheme, Text, VStack } from 'shared/ui';

import { useGetProfileQuery } from '../../api';
import { useProfileChange } from '../../lib/hooks';
import { EValidateProfileError } from '../../lib/types';
import { profileSelectors } from '../../model';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader';

export const EditableProfileCard = memo(() => {
  const { t } = useTranslation('profile');

  const { isLoading, data: formData } = useGetProfileQuery();

  const error = useAppSelector(profileSelectors.profileError);
  const readonly = useAppSelector(profileSelectors.profileReadOnly);
  const validateErrors = useAppSelector(profileSelectors.profileValidateErrorsSelector);

  const validateErrorTranslates = {
    [EValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [EValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountry'),
    [EValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserData'),
    [EValidateProfileError.NO_DATA]: t('noData'),
    [EValidateProfileError.SERVER_ERROR]: t('serverUpdateError'),
  };

  const {
    handleChangeAge,
    handleChangeAvatar,
    handleChangeCity,
    handleChangeCountry,
    handleChangeCurrency,
    handleChangeFirstName,
    handleChangeLastName,
    handleChangeUsername,
  } = useProfileChange();

  return (
    <VStack>
      <EditableProfileCardHeader />

      {Boolean(validateErrors?.length) &&
        validateErrors.map(err => (
          <Text text={err} key={validateErrorTranslates[err]} theme={ETextTheme.ERROR} />
        ))}

      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={handleChangeFirstName}
        onChangeLastName={handleChangeLastName}
        onChangeAge={handleChangeAge}
        onChangeCity={handleChangeCity}
        onChangeUsername={handleChangeUsername}
        onChangeAvatar={handleChangeAvatar}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </VStack>
  );
});
