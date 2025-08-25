import client from '@/common/utils/client';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { ChatListInterface } from '../types';
import { QUERY_KEYS } from '@/libs/queryKeys';

export interface GetChatListRequest {
  pageSize: number;
  cursorId?: string | null;
  cursorLastChatAt?: string | null;
}

export interface ChatListResponse {
  message: string;
  data: {
    chatRooms: ChatListInterface[];
    hasNext: boolean;
    cursorLastChatAt: string | null;
    cursorId: string | null;
  };
}

interface PageParam {
  cursorId?: string | null;
  cursorLastChatAt?: string | null;
}

const getChatList = async (params: GetChatListRequest) => {
  const res = await client.get<ChatListResponse>('/api/v1/chatroom', {
    params,
  });

  return res.data;
};

const useGetChatList = (params: GetChatListRequest) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHAT_LIST, params],
    queryFn: ({ pageParam }) => getChatList({ ...params, ...pageParam }),
    getNextPageParam: lastPage =>
      lastPage.data.hasNext
        ? {
            cursorId: lastPage.data.cursorId,
            cursorLastChatAt: lastPage.data.cursorLastChatAt,
          }
        : undefined,
    initialPageParam,
    select: data => data.pages.flatMap(page => page.data.chatRooms),
    staleTime: 0,
  });
};

export default useGetChatList;
