import { memo } from 'react';

import { Layout } from '@/widgets/layout';

import { EditableProfileCard } from '@/features/editable-profile-card';

const ProfilePage = () => {
  return (
    <Layout>
      <EditableProfileCard />
    </Layout>
  );
};

export default memo(ProfilePage);
