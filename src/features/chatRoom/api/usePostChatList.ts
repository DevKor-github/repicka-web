import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postChatList = async (chatRoomId: number) => {
  const res = await client.post(`/api/v1/chatroom/${chatRoomId}/enter`, null, {
    params: { pageSize: CHAT_PAGING_SIZE },
  });

  return res.data;
};

export const usePostChatList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (chatRoomId: number) => postChatList(chatRoomId),
    onSuccess: (_data, chatRoomId) => {
      queryClient.invalidateQueries({ queryKey: ['chat-list', chatRoomId] });
    },
  });
};
