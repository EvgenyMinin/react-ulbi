import { memo } from 'react';

import { ArticleList } from 'entities/article';

const ArticlePage = () => <ArticleList view='small' articles={[]} />;

export default memo(ArticlePage);
