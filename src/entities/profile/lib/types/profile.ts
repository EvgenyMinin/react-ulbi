import { ECountry, ECurrency } from 'shared/lib';

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  currency: ECurrency;
  country: ECountry;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  isLoading: boolean;
  data?: IProfile;
  readonly: boolean;
  error?: string;
}
