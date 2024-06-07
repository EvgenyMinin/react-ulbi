import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, EButtonTheme } from 'shared/ui';

export const LangSwitcher = memo(() => {
  const { t, i18n } = useTranslation();

  const handleToggleTranslation = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={EButtonTheme.CLEAR} onClick={handleToggleTranslation}>
      {t('lang')}
    </Button>
  );
});
