import { useToast } from '@/common/hooks/useToast';
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
  const { openToast } = useToast();

  return useMutation<ExitResponse, AxiosError<ExitResponse>, number, unknown>({
    mutationFn: (chatRoomId: number) => patchExit(chatRoomId),
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
      openToast({ message: '채팅방에서 퇴장했어요' });
    },
    onError: () => {
      openToast({ message: '퇴장에 실패했어요. 다시 시도해주세요!' });
      // console.error('퇴장 실패', error);
    },
  });
};
