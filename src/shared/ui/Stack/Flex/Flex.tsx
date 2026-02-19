import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import { Mods } from 'shared/lib';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = 4 | 8 | 16 | 32;

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TFlexProps = DivProps & {
  children: ReactNode;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  wide?: boolean;
};

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  '4': styles.gap4,
  '8': styles.gap8,
  '16': styles.gap16,
  '32': styles.gap32,
};

export const Flex = (props: TFlexProps) => {
  const {
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap = '16',
    children,
    className,
    wide,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods: Mods = {
    [styles.wide]: wide,
  };

  return <div className={cn(styles.flex, mods, classes)}>{children}</div>;
};
