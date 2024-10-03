import i18n from '@/i18n';

import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const clientApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Accept-Language': i18n.language,
  },
});

clientApi.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    return config;
  },
  error => {
    return { data: null, error: error.request };
  },
);

clientApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    return error;
  },
);

export const createNewClientAPIInstance = (baseURL: string): AxiosInstance => {
  const newAxiosInstance = axios.create({
    ...clientApi.defaults,
    baseURL: `${import.meta.env.VITE_API_URL}${baseURL}`,
  });

  newAxiosInstance.interceptors.request = clientApi.interceptors.request;
  newAxiosInstance.interceptors.response = clientApi.interceptors.response;

  return newAxiosInstance;
};