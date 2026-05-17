import { memo } from 'react';

import { Layout } from '@/widgets/layout';

import { EditableProfileCard } from '@/features/editable-profile-card';

const ProfilePage = () => (
  <Layout dataTestId='ProfilePage'>
    <EditableProfileCard />
  </Layout>
);

export default memo(ProfilePage);
