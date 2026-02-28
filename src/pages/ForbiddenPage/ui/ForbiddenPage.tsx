import { useTranslation } from 'react-i18next';

import { Layout } from 'widgets/layout';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return (
    <Layout>
      <span>{t('forbidden')}</span>
    </Layout>
  );
};

export default ForbiddenPage;
