import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { profileSelectors } from 'entities/profile';

import { Button, EButtonTheme, Text } from 'shared/ui';

import { useHeaderActions } from './lib';
import styles from './styles.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const { handleEdit, handleDecline, handleSave } = useHeaderActions();

  const readOnly = useAppSelector(profileSelectors.profileReadOnly);

  const button = useMemo(
    () =>
      readOnly ? (
        <Button theme={EButtonTheme.OUTLINE} onClick={handleEdit}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button theme={EButtonTheme.OUTLINE_RED} onClick={handleDecline}>
            {t('decline')}
          </Button>
          <Button theme={EButtonTheme.OUTLINE} onClick={handleSave}>
            {t('save')}
          </Button>
        </>
      ),
    [handleDecline, handleEdit, handleSave, readOnly, t]
  );

  return (
    <div className={styles.profilePageHeader}>
      <Text title={t('profile')} />
      <div className={styles.actionContainer}>{button}</div>
    </div>
  );
};
