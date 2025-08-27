import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useQuery } from '@tanstack/react-query';
import type { NotificationInterface } from '../types';

export interface NotificationResponse {
  message: string;
  data: NotificationInterface[];
}

const getNotification = async () => {
  const res = await client.get<NotificationResponse>('api/v1/notification');
  return res.data.data;
};

export const useGetNotification = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.NOTIFICATION_LIST],
    queryFn: getNotification,
    staleTime: 0,
  });
};
