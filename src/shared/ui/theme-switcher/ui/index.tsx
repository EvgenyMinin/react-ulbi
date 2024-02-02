import { FC } from 'react';

import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, EThemeButton } from 'shared/ui';

import styles from './styles.module.scss';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={EThemeButton.CLEAR}
      className={cn(styles.themeButton, { [styles.dark]: theme === ETheme.LIGHT }, [theme])}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </Button>
  );
};
