import { IProfile } from '@/entities/profile';

import { rtkApi } from '@/shared/api';

const profileApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<IProfile, void>({
      query: () => ({ url: '/profile' }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
