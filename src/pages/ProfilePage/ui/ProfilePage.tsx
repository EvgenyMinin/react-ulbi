import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { Layout } from 'widgets/layout';

import {
  EValidateProfileError,
  ProfileCard,
  profileSelectors,
  profileService,
} from 'entities/profile';

import { ETextTheme, Text } from 'shared/ui';

import { ProfilePageHeader } from './ProfilePageHeader';
import { useInputChange } from '../lib/hooks';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useAppSelector(profileSelectors.profileForm);
  const isLoading = useAppSelector(profileSelectors.profileLoading);
  const error = useAppSelector(profileSelectors.profileError);
  const readonly = useAppSelector(profileSelectors.profileReadOnly);
  const validateErrors = useAppSelector(profileSelectors.profileValidateErrorsSelector);

  const {
    handleChangeFirstName,
    handleChangeLastName,
    handleChangeAge,
    handleChangeCity,
    handleChangeUsername,
    handleChangeAvatar,
    handleChangeCurrency,
    handleChangeCountry,
  } = useInputChange();

  const validateErrorTranslates = {
    [EValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [EValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountry'),
    [EValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserData'),
    [EValidateProfileError.NO_DATA]: t('noData'),
    [EValidateProfileError.SERVER_ERROR]: t('serverUpdateError'),
  };

  useEffect(() => {
    dispatch(profileService.fetchProfileData());
  }, [dispatch]);

  return (
    <Layout>
      <ProfilePageHeader />
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
    </Layout>
  );
};

export default ProfilePage;
