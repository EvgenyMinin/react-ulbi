import { useTranslation } from 'react-i18next';
import { Button, EThemeButton } from 'shared/ui';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleToggleTranslation = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={EThemeButton.CLEAR} onClick={handleToggleTranslation}>
      {t('lang')}
    </Button>
  );
};
