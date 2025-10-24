import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/article';

const ArticleDetailsPage = () => {
  const { id = '' } = useParams<{ id: string }>();

  return <ArticleDetails articleId={id} />;
};

export default memo(ArticleDetailsPage);
