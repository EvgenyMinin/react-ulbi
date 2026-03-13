import { useTranslation } from 'react-i18next';

import { Layout } from '@/widgets/layout';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Layout>{t('aboutPage')}</Layout>;
};

export default AboutPage;
