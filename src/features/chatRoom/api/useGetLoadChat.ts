import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { ChatInterface } from '../types';
import { QUERY_KEYS } from '@/libs/queryKeys';

export interface GetLoatChatRequest {
  pageSize: number;
  cursorId?: string | null;
}

export interface LoadChatResponse {
  message: string;
  data: {
    // 페이지네이션 대상 데이터
    messages: ChatInterface[];
    cursorId?: string | null;
    hasNext: boolean;
  };
}

interface PageParam {
  cursorId?: string | null;
}

const getLoadChat = async ({ chatRoomId, cursorId }: { chatRoomId: number; cursorId?: string | null }) => {
  const res = await client.get<LoadChatResponse>(`/api/v1/chatroom/${chatRoomId}/load-chat`, {
    params: {
      pageSize: CHAT_PAGING_SIZE,
      cursorId: cursorId,
    },
  });

  return res.data;
};

// chat fetch (페이지네이션 대상 data)
export const useGetLoadChat = (chatRoomId: number) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHAT_ROOM, chatRoomId],
    queryFn: ({ pageParam }) => getLoadChat({ chatRoomId, ...pageParam }),
    getNextPageParam: lastPage =>
      lastPage.data.hasNext
        ? {
            cursorId: lastPage.data.cursorId,
          }
        : undefined,
    initialPageParam,
    select: response => response.pages.flatMap(page => page.data.messages),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
