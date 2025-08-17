import client from '@/common/utils/client';
import type { ChatRoomInterface } from '@/features/chatRoom/types';
import { useMutation } from '@tanstack/react-query';

interface PostChatroomResponse {
  message: string;
  data: {
    chatRoom: ChatRoomInterface;
  };
}
const postChatroom = async (itemId: number) => {
  const response = await client.post<PostChatroomResponse>('/api/v1/chatroom', { itemId });
  return response.data;
};

export const usePostChatroom = () => {
  useMutation({
    mutationFn: postChatroom,
  });
};
