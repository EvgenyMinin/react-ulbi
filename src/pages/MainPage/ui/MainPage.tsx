import { useTranslation } from 'react-i18next';

import { Layout } from 'widgets/layout';

import { Counter } from 'entities/counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Layout>
      <span>{t('mainPage')}</span>
      <Counter />
    </Layout>
  );
};

export default MainPage;
