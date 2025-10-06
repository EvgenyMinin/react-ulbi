import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { ProfileCard, profileSelectors, profileService } from 'entities/profile';

import { ProfilePageHeader } from './ProfilePageHeader';
import { useInputChange } from '../lib/hooks';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(profileSelectors.profileForm);
  const isLoading = useAppSelector(profileSelectors.profileLoading);
  const error = useAppSelector(profileSelectors.profileError);
  const readonly = useAppSelector(profileSelectors.profileReadOnly);

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

  useEffect(() => {
    dispatch(profileService.fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
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
    </div>
  );
};

export default ProfilePage;
