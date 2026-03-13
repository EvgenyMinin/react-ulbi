import { IError } from '@/shared/lib';

export interface ILoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: IError;
}
