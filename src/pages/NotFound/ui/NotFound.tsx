import { useTranslation } from 'react-i18next';

import { Layout } from '@/widgets/layout';

import styles from './styles.module.scss';

export const NotFound = () => {
  const { t } = useTranslation('not-found');

  return (
    <Layout className={styles.container} dataTestId='NotFoundPage'>
      {t('notFoundPage')}
    </Layout>
  );
};
