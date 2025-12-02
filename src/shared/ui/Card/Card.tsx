import React, { HTMLAttributes, memo, ReactNode } from 'react';

import cn from 'classnames';

import styles from './Card.module.scss';

type TCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Card = memo((props: TCardProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn(styles.card, {}, [className])} {...rest}>
      {children}
    </div>
  );
});
