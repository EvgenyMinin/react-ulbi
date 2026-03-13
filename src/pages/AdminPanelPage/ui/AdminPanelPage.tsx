import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Layout } from '@/widgets/layout';

const AdminPanelPage = () => {
  const { t } = useTranslation('admin');

  return <Layout>{t('adminPage')}</Layout>;
};

export default memo(AdminPanelPage);
