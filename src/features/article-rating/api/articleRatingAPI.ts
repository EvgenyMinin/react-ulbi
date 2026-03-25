import { TRating } from '@/entities/rating';

import { rtkApi } from '@/shared/api';

type TGetArticleResponse = {
  userId: string;
  articleId: string;
};

type TArticleRatingPayload = {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
};

const articleRatingsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRatings: build.query<TRating[], TGetArticleResponse>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
  }),
});

const rateArticleApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    rateArticle: build.mutation<void, TArticleRatingPayload>({
      query: body => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingsQuery } = articleRatingsApi;
export const { useRateArticleMutation } = rateArticleApi;
