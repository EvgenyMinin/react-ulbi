import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import { Mods } from 'shared/lib';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'stretch' | 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = 0 | 4 | 8 | 16 | 32;

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type TFlexProps = DivProps & {
  children: ReactNode;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
};

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  stretch: styles.alignStretch,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  '0': styles.gap0,
  '4': styles.gap4,
  '8': styles.gap8,
  '16': styles.gap16,
  '32': styles.gap32,
};

export const Flex = (props: TFlexProps) => {
  const {
    align = 'stretch',
    justify = 'start',
    direction = 'row',
    gap = '16',
    children,
    className,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods: Mods = {};

  return <div className={cn(styles.flex, mods, classes)}>{children}</div>;
};
