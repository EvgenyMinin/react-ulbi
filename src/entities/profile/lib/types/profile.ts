import { ECountry, ECurrency, IError } from 'shared/lib';

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
}
