import { FC } from 'react';

import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, EButtonTheme } from 'shared/ui';

import styles from './styles.module.scss';

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme={EButtonTheme.CLEAR} className={cn(styles.themeButton)} onClick={toggleTheme}>
      <ThemeIcon />
    </Button>
  );
};
