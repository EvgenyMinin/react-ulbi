import { EArticleView, IArticle } from 'entities/article';

import { IError } from 'shared/lib';

export type TArticleListState = {
  isLoading: boolean;
  view: EArticleView;
  error?: IError;
  data?: IArticle[];
};
