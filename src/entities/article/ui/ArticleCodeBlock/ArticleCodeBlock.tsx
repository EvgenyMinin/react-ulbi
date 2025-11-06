import React, { memo } from 'react';

import { IArticleCodeBlock } from 'entities/article/lib';

import { CodeBlock } from 'shared/ui';

import styles from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
  block: IArticleCodeBlock;
};

export const ArticleCodeBlock = memo((props: TArticleCodeBlockProps) => {
  const { block } = props;

  return (
    <div className={styles.articleCodeBlock}>
      <CodeBlock code={block.code} />
    </div>
  );
});
