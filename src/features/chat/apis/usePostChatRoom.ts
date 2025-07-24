// 채팅방 들어갔을 때 오는 값
import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

const postChatRoom = async ({ chatRoomId }: { chatRoomId: number }) => {
  const res = await client.post(`/api/v1/chatroom/${chatRoomId}/enter`, null, {
    params: { pageSize: 5 },
  });

  console.log(res.data.message);

  return res;
};

export const usePostChatRoom = () =>
  useMutation({
    mutationFn: postChatRoom,
  });
