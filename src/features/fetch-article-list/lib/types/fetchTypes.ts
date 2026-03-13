import { EArticleView, IArticle } from '@/entities/article';

import { IError } from '@/shared/lib';

export type TArticleListState = {
  isLoading: boolean;
  view: EArticleView;
  page: number;
  hasMore: boolean;
  inited: boolean;
  limit?: number;
  error?: IError;
  data?: IArticle[];
};
