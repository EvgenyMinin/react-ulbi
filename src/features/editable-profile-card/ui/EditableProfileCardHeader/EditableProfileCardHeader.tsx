import React, { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers';

import { Button, EButtonTheme, HStack, Text } from 'shared/ui';

import { useHeaderActions } from '../../lib/hooks';
import { profileReadOnly } from '../../model/selectors';

type TEditableProfileCardHeaderProps = {
  className?: string;
};

export const EditableProfileCardHeader = memo((props: TEditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const { handleEdit, handleDecline, handleSave } = useHeaderActions();

  const readOnly = useAppSelector(profileReadOnly);

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
    <HStack gap={32} align='center' justify='between' wide>
      <Text title={t('profile')} />
      <HStack>{button}</HStack>
    </HStack>
  );
});
