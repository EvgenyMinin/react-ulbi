import { ECountry, ECurrency } from '@/shared/lib';

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
