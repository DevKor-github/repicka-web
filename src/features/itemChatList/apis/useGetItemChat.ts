import client from '@/common/utils/client';
import type { ChatListInterface } from '@/features/chatList/types';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';

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

const getItemChatList = async ({ params, itemId }: { params: GetChatListRequest; itemId: number }) => {
  const res = await client.get<ChatListResponse>(`/api/v1/chatroom`, {
    params: {
      itemId,
      ...params,
    },
  });

  return res.data;
};

const useGetItemChatList = ({ params, itemId }: { params: GetChatListRequest; itemId: number }) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ITEM_CHAT_LIST, params, itemId],
    queryFn: ({ pageParam }) => getItemChatList({ itemId: itemId, params: { ...params, ...pageParam } }),
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

export default useGetItemChatList;
