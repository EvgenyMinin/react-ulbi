import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export const NotFound = () => {
  const { t } = useTranslation('not-found');

  return <div className={styles.container}>{t('notFoundPage')}</div>;
};
