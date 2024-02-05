import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <span>{t('mainPage')}</span>
    </div>
  );
};

export default MainPage;
