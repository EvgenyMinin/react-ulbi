import { useTranslation } from 'react-i18next';

import { Button, Input } from 'shared/ui';

import styles from './styles.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation('auth');

  return (
    <div className={styles.loginForm}>
      <Input placeholder={t('username')} autofocus />
      <Input placeholder={t('password')} />
      <Button className={styles.loginBtn}>{t('login')}</Button>
    </div>
  );
};
