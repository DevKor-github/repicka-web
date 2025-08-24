import qs from 'qs';
import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  // 같은 쿼리 파라미터를 배열로 감싸 중복해서 보내기위해서 qs 사용
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
});

const REFRESH_URL = '/api/v1/refresh-token';

interface PendingRequest {
  config: AxiosRequestConfig;
  resolve: (value: AxiosResponse) => void;
  reject: (reason?: unknown) => void;
}

class PendingRequestsQueue {
  private isRefreshing = false;
  private pendingRequests: PendingRequest[] = [];

  addRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.pendingRequests.push({ config, resolve, reject });
    });
  }

  processQueue(error: unknown) {
    this.pendingRequests.forEach(({ config, resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        // 새로운 토큰으로 원래 요청 재시도
        client(config).then(resolve).catch(reject);
      }
    });
    this.pendingRequests = [];
  }

  setRefreshing(refreshing: boolean) {
    this.isRefreshing = refreshing;
  }

  getRefreshing(): boolean {
    return this.isRefreshing;
  }
}

const pendingRequestsQueue = new PendingRequestsQueue();

const responseErrorHandler = async (error: AxiosError) => {
  const { config, response } = error;

  if (response?.status === 401 && config && config.url !== REFRESH_URL) {
    // 이미 refresh 중인 경우, 요청을 queue에 추가
    if (pendingRequestsQueue.getRefreshing()) {
      return pendingRequestsQueue.addRequest(config);
    }

    pendingRequestsQueue.setRefreshing(true);

    try {
      await client.post(REFRESH_URL);
      // refresh 성공 시, 대기 중인 모든 요청 처리
      pendingRequestsQueue.processQueue(null);
      // 현재 실패한 요청 재시도
      return client(config);
    } catch (err) {
      // refresh 실패 시, 대기 중인 모든 요청을 에러와 함께 처리
      pendingRequestsQueue.processQueue(err);
      pendingRequestsQueue.setRefreshing(false);
      return Promise.reject(err);
    } finally {
      pendingRequestsQueue.setRefreshing(false);
    }
  }

  return Promise.reject(error);
};

client.interceptors.response.use(response => response, responseErrorHandler);
export default client;
