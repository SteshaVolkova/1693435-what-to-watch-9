import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getCommentToken } from './comment-token';
import {getToken} from './token';

const BACKEND_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      const commentToken = getCommentToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      if (commentToken) {
        config.headers['x-token'] = commentToken;
      }

      return config;
    },
  );

  return api;
};
