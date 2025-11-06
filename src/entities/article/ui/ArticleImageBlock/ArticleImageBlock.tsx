import React, { memo } from 'react';

import { IArticleImageBlock } from 'entities/article/lib';

import { ETextAlign, Text } from 'shared/ui';

import styles from './ArticleImageBlock.module.scss';

type TArticleImageBlockProps = {
  block: IArticleImageBlock;
};

export const ArticleImageBlock = memo((props: TArticleImageBlockProps) => {
  const { block } = props;

  return (
    <div className={styles.articleImageBlock}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text title={block.title} align={ETextAlign.CENTER} />}
    </div>
  );
});
