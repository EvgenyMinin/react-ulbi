import { ButtonHTMLAttributes, FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export enum EThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EThemeButton;
}

export const Button: FC<ButtonProps> = ({ children, className, theme, ...props }) => (
  <button className={cn(styles.button, {}, [className, theme])} {...props}>
    {children}
  </button>
);
