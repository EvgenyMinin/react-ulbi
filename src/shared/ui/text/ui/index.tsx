import { memo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { ETextAlign, ETextTheme } from '../lib';

interface ITextProps {
  title?: string;
  text?: string | number;
  className?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
}

export const Text = memo(
  ({ title, text, className, theme = ETextTheme.PRIMARY, align = ETextAlign.LEFT }: ITextProps) => {
    return (
      <div className={cn(styles.text, {}, [className, styles[theme], styles[align]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  }
);
