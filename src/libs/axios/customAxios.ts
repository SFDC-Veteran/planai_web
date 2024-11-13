import CONFIG from 'src/config/config.json';
import axios, { AxiosRequestConfig } from 'axios';
import requestInterceptor from './requestHandler';
import ResponseHandler from './responseHandler';
import Token from '../token/tokens';
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from '../../constants/token/token.constants';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: CONFIG.serverUrl,
  withCredentials: true,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
};

const planaiAxios = axios.create(axiosRequestConfig);

planaiAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

planaiAxios.interceptors.response.use((res) => res, ResponseHandler);

export default planaiAxios;

export const setAccessToken = (token: string) => {
  planaiAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
