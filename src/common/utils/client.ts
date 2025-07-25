import qs from 'qs';
import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params),
});

const REFRESH_URL = '/api/v1/refresh-token';

// TODO: Pending Requests Queue 추가 필요
// 여러 요청이 동시에 발생할 경우 문제 발생 가능
const responseErrorHandler = async (error: AxiosError) => {
  const { config, response } = error;

  if (response?.status === 401 && config && config.url !== REFRESH_URL) {
    try {
      await client.post(REFRESH_URL);
      return client(config);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
};

client.interceptors.response.use(response => response, responseErrorHandler);
export default client;
