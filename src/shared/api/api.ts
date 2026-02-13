import axios from 'axios';

import { USER_LOCAL_STORAGE_KEY } from 'shared/consts';

export const $api = axios.create({
  baseURL: API,
});

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
  }

  return config;
});
