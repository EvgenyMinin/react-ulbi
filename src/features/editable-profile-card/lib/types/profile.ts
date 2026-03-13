import { ECountry, ECurrency, IError } from '@/shared/lib';

export enum EValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: ECurrency;
  country?: ECountry;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  isLoading: boolean;
  data?: IProfile;
  form?: IProfile;
  readonly: boolean;
  error?: IError;
  validateErrors?: EValidateProfileError[];
}
