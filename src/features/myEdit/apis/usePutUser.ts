import client from '@/common/utils/client';
import type { Gender } from '@/libs/types/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UserRequest {
  nickname: string; // 닉네임 필수 입력 2-10자
  profileImageUrl?: string | null;
  gender?: Gender;
  height?: number;
  weight?: number;
}

const putUser = async (userData: UserRequest) => {
  const res = await client.put('/api/v1/user', userData);
  console.log(res.data);

  return res.data;
};

export const usePutUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      console.error('유저 정보 수정 실패', error);
    },
  });
};
