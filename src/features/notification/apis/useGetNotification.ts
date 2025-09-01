import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { NotificationInterface } from '../types';

export interface GetNotificationRequest {
  pageSize: number;
  cursorId?: string | null;
  cursorCreatedAt?: string | null;
}

export interface NotificationResponse {
  message: string;
  data: {
    notifications: NotificationInterface[];
    pageInfo: {
      hasNext: boolean;
      cursorCreatedAt: string | null;
      cursorId: string | null;
    };
  };
  version: string;
}

interface PageParam {
  cursorid?: string | null;
  cursorCreatedAt?: string | null;
}

const getNotification = async (params: GetNotificationRequest) => {
  const res = await client.get<NotificationResponse>('api/v1/notification', {
    params,
  });

  return res.data.data;
};

export const useGetNotification = (params: GetNotificationRequest) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.APPOINTMENT_LIST, params],
    queryFn: ({ pageParam }) => getNotification({ ...params, ...pageParam }),
    getNextPageParam: lastPage =>
      lastPage.pageInfo.hasNext
        ? {
            cursorId: lastPage.pageInfo.cursorId,
            cursorCreatedAt: lastPage.pageInfo.cursorCreatedAt,
          }
        : undefined,
    initialPageParam,
    select: data => data.pages.flatMap(page => page.notifications),
    staleTime: 0,
  });
};

export default useGetNotification;
