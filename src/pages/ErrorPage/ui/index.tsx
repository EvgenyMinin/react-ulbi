import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorContainer}>
      <p>{t('errorPage')}</p>
      <Button onClick={reloadPage}>{t('refreshPage')}</Button>
    </div>
  );
};
