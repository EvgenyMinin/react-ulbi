import { ButtonHTMLAttributes, FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
  XL = 'size_xl',
  L = 'size_l',
  M = 'size_m',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
  isSquare?: boolean;
  size?: EButtonSize;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  isSquare,
  size = EButtonSize.L,
  ...props
}) => (
  <button
    className={cn(styles.button, { [styles.square]: isSquare }, [
      className,
      styles[theme],
      styles[size],
    ])}
    {...props}
  >
    {children}
  </button>
);
