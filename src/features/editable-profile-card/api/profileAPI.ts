import { rtkApi } from 'shared/api';

const profileApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query({
      query: () => ({ url: '/profile' }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
