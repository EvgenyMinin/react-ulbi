import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './ImageBlock.module.scss';

type TImageBlockProps = {};

export const ImageBlock = (props: TImageBlockProps) => {
  const { t } = useTranslation();

  return <div>ImageBlock</div>;
};
