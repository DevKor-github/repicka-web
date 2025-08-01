import client from '@/common/utils/client';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useQuery } from '@tanstack/react-query';

const getChatList = async () => {
  const res = await client.get('/api/v1/chatroom', {
    params: { pageSize: CHAT_PAGING_SIZE },
  });

  return res.data;
};

const useGetChatList = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: getChatList,
    staleTime: 0,
  });
};

export default useGetChatList;
