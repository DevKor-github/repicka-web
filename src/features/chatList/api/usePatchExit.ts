import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface ExitResponse {
  code?: string;
  data: string;
  message: string;
}

const patchExit = async (chatRoomId: number) => {
  const res = await client.patch<ExitResponse>(`/api/v1/chatroom/${chatRoomId}/exit`);

  return res.data;
};

export const usePatchExit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (chatRoomId: number) => patchExit(chatRoomId),
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat-list'] });
      console.log('퇴장 성공');
    },
    onError: error => {
      console.error('퇴장 실패', error);
    },
  });
};
