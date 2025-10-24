import { IError } from 'shared/lib';

import { IArticle } from './article';

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: IError;
  data?: IArticle;
}
