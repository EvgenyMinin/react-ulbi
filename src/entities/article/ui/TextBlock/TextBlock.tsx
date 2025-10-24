import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './TextBlock.module.scss';

type TTextBlockProps = {};

export const TextBlock = (props: TTextBlockProps) => {
  const { t } = useTranslation();

  return <div>TextBlock</div>;
};
