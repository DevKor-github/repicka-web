// 채팅방 들어갔을 때 오는 값
import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useQuery } from '@tanstack/react-query';
import type { GetChatRoomResponse } from '../types';

const getChatRoom = async ({ chatRoomId }: { chatRoomId: number }) => {
  const res = await client.get<GetChatRoomResponse>(`/api/v1/chatroom/${chatRoomId}/enter`, {
    params: { pageSize: CHAT_PAGING_SIZE },
  });

  return res.data;
};

const useGetChatRoom = (chatRoomId: number) => {
  return useQuery({
    queryKey: ['chatRoom', chatRoomId],
    queryFn: () => getChatRoom({ chatRoomId }),
    staleTime: 0,
    select: response => response.data,
  });
};

export default useGetChatRoom;
