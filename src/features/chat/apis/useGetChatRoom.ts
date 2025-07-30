// 채팅방 들어갔을 때 오는 값
import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getChatRoom = async ({ chatRoomId }: { chatRoomId: number }) => {
  const res = await client.get(`/api/v1/chatroom/${chatRoomId}/enter`, {
    params: { pageSize: 5 },
  });

  return res.data;
};

const useGetChatRoom = (chatRoomId: number) => {
  return useQuery({
    queryKey: ['chatRoom', chatRoomId],
    queryFn: () => getChatRoom({ chatRoomId }),
    staleTime: 0,
  });
};

export default useGetChatRoom;
