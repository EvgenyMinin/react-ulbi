import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Layout } from '@/widgets/layout';

const ArticleEditPage = memo(() => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return <Layout>{isEdit ? t('editPageTitle') : t('createPageTitle')}</Layout>;
});

export default ArticleEditPage;
