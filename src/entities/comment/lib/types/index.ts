import { IUser } from '@/entities/user';

export type TCommentItem = {
  id: string;
  user: IUser;
  text: string;
};
