import React, { memo } from 'react';

import { IArticleTextBlock } from 'entities/article/lib';

import { Text } from 'shared/ui';

import styles from './ArticleTextBlock.module.scss';

type TArticleTextBlockProps = {
  block: IArticleTextBlock;
};

export const ArticleTextBlock = memo((props: TArticleTextBlockProps) => {
  const { block } = props;

  return (
    <div className={styles.articleTextBlock}>
      <>
        {block.title && <Text title={block.title} />}
        {block.paragraphs.map((p, i) => (
          <Text key={i} text={p} />
        ))}
      </>
    </div>
  );
});
