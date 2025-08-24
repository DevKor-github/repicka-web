import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export interface ExitResponse {
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

  return useMutation<ExitResponse, AxiosError<ExitResponse>, number, unknown>({
    mutationFn: (chatRoomId: number) => patchExit(chatRoomId),
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
      console.log('퇴장 성공');
    },
    onError: error => {
      console.error('퇴장 실패', error);
    },
  });
};
