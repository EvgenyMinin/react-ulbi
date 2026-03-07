import { rtkApi } from 'shared/api';

import { TNotificationItem } from '../lib/types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getNotifications: build.query<TNotificationItem[], null>({
      query: () => ({ url: '/notifications' }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
