// 채팅방 들어갔을 때 오는 값
import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
// import { useQuery } from '@tanstack/react-query';
import type { ChatRoomInterface, CurrentAppointmentInterface, ItemInterface, MessageInterface } from '../types';

export interface ChatRoomResponse {
  message: string;
  data: {
    chatRoom: ChatRoomInterface;
    chat: {
      messages: MessageInterface[];
      cursorId?: string | null;
      hasNext: boolean;
    };
    item: ItemInterface;
    currentAppointment: CurrentAppointmentInterface;
  };
}

export const getChatRoom = async (chatRoomId: number) => {
  const res = await client.get<ChatRoomResponse>(`/api/v1/chatroom/${chatRoomId}/enter`, {
    params: { pageSize: CHAT_PAGING_SIZE },
  });

  return res.data.data;
};
