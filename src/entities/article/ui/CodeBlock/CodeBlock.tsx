import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './CodeBlock.module.scss';

type TCodeBlockProps = {};

export const CodeBlock = (props: TCodeBlockProps) => {
  const { t } = useTranslation();

  return <div>CodeBlock</div>;
};
