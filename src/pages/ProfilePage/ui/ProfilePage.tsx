import { useEffect } from 'react';

import { useAppDispatch } from 'app/providers';

import { ProfileCard, profileService } from 'entities/profile';

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileService.fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
