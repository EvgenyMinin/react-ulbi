import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { Layout } from 'widgets/layout';

import { ArticleDetails } from 'entities/article';

import { VStack } from 'shared/ui';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const ArticleDetailsPage = memo(() => {
  const { id = '' } = useParams<{ id: string }>();

  return (
    <Layout>
      <VStack gap={16}>
        <ArticleDetailsPageHeader />

        <VStack gap={32}>
          <ArticleDetails articleId={id} />
          <ArticleDetailsComments id={id} />
        </VStack>
      </VStack>
    </Layout>
  );
});

export default ArticleDetailsPage;
