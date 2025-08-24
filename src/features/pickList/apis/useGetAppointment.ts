import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { AppointmentInterface } from '../types';

export interface GetAppointmentReuest {
  pageSize: number;
  subject: 'REQUESTER' | 'OWNER';
  period: 'ALL' | 'YEAR' | 'SIX_MONTH' | 'WEEK';
  cursorState?: string | null;
  cursorId?: string | null;
  cursorDate?: string | null;
}

export interface GetAppointmentResponst {
  message: string;
  data: {
    appointmentInfoList: AppointmentInterface[];
    pageInfo: {
      cursorState: string | null;
      cursorDate: string | null;
      cursorId: string | null;
      hasNext: boolean;
    };
  };
}

interface PageParam {
  cursorState?: string | null;
  cursorId?: string | null;
  cursorDate?: string | null;
}

const getAppointment = async (params: GetAppointmentReuest) => {
  const res = await client.get<GetAppointmentResponst>('/api/v1/appointment', {
    params,
  });

  return res.data;
};

const useGetAppointment = (params: GetAppointmentReuest) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.APPOINTMENT_LIST, params],
    queryFn: ({ pageParam }) => getAppointment({ ...params, ...pageParam }),
    getNextPageParam: lastPage =>
      lastPage.data.pageInfo.hasNext
        ? {
            cursorId: lastPage.data.pageInfo.cursorId,
            cursorLastChatAt: lastPage.data.pageInfo.cursorDate,
          }
        : undefined,
    initialPageParam,
    select: data => data.pages.flatMap(page => page.data.appointmentInfoList),
    staleTime: 0,
  });
};

export default useGetAppointment;
