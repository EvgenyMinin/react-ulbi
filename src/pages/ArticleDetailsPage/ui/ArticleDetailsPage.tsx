import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { Layout } from '@/widgets/layout';

import { ArticleRating } from '@/features/article-rating';

import { ArticleDetails } from '@/entities/article';

import { VStack } from '@/shared/ui';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const ArticleDetailsPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Layout>
      <VStack gap={16}>
        <ArticleDetailsPageHeader />

        <VStack gap={32}>
          <ArticleDetails articleId={id} />
          <ArticleRating articleId={id} />
          <ArticleDetailsComments id={id} />
        </VStack>
      </VStack>
    </Layout>
  );
});

export default ArticleDetailsPage;
