import { ButtonHTMLAttributes, memo } from 'react';

import cn from 'classnames';

import { Mods } from 'shared/lib';

import styles from './styles.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    isSquare,
    disabled,
    theme = EButtonTheme.OUTLINE,
    size = EButtonSize.L,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles.square]: isSquare,
    [styles.disabled]: disabled,
  };

  return (
    <button
      className={cn(styles.button, mods, [className, styles[theme], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
