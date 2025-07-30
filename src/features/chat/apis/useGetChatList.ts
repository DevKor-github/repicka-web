// 내 채팅 리스트 보기

import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useQuery } from '@tanstack/react-query';
import type { ChatRoom } from '../types';

const getChatList = async (): Promise<ChatRoom[]> => {
  const response = await client.get('api/v1/chatroom', {
    params: { pageSize: CHAT_PAGING_SIZE },
  });

  return response.data.chatRooms;
};

export const useGetChatList = () => {
  return useQuery<ChatRoom[]>({
    queryKey: ['chat-list'],
    queryFn: getChatList,
  });
};
