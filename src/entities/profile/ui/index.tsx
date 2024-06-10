import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { Button, EButtonTheme, Input, Loader, Text } from 'shared/ui';

import styles from './styles.module.scss';
import { profileSelectors } from '../model';

export const ProfileCard = () => {
  const { t } = useTranslation('profile');
  const data = useAppSelector(profileSelectors.profileSelector);
  const isLoading = useAppSelector(profileSelectors.profileLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <Text title={t('profile')} />
        <Button theme={EButtonTheme.OUTLINE}>{t('edit')}</Button>
      </div>
      <div className={styles.data}>
        <Input value={data?.firstName} placeholder={t('firstNamePlaceholder')} />
        <Input value={data?.lastName} placeholder={t('lastNamePlaceholder')} />
      </div>
    </div>
  );
};
