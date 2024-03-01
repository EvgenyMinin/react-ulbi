import { Counter } from 'entities/counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <span>{t('mainPage')}</span>
      <Counter />
    </div>
  );
};

export default MainPage;
