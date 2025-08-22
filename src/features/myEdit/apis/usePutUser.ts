import { s3PutImageToUrl } from '@/common/apis/s3PutImageToUrl';
import client from '@/common/utils/client';
import type { Gender, UserInterface } from '@/libs/types/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UserPayload {
  nickname: string; // 닉네임 필수 입력 2-10자
  profileImageUrl: string | null;
  gender: Gender | null;
  height: number | null;
  weight: number | null;
}

interface UserResponse {
  message: string;
  data: UserInterface;
}

interface FilePayload {
  file: File;
  presignedUrl: string;
}

const putUser = async ({ userData, fileData }: { userData: UserPayload; fileData: FilePayload | undefined }) => {
  if (fileData) await s3PutImageToUrl(fileData.file, fileData.presignedUrl);
  const res = await client.put<UserResponse>('/api/v1/user', userData);

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
