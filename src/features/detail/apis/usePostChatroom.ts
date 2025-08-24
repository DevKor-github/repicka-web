import client from '@/common/utils/client';
import type { ChatRoomInterface } from '@/features/chatRoom/types';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postChatroom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
    },
  });
};
