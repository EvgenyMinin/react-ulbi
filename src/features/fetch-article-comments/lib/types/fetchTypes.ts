import { TCommentItem } from '@/entities/comment';

import { IError } from '@/shared/lib';

export type TArticleCommentsState = {
  isLoading: boolean;
  error?: IError;
  data?: TCommentItem[];
};
