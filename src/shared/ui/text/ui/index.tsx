import { FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { ETextTheme } from '../lib';

interface ITextProps {
  title?: string;
  text?: string;
  className?: string;
  theme?: ETextTheme;
}

export const Text: FC<ITextProps> = ({ title, text, className, theme = ETextTheme.PRIMARY }) => {
  return (
    <div className={cn(styles.text, {}, [className, styles[theme]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
