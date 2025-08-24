import client from '@/common/utils/client';

interface GetInProgressResponse {
  data: boolean;
  message: string;
}

export const getInProgress = async (chatRoomId: number) => {
  const res = await client.get<GetInProgressResponse>('api/v1/appointment/in-progress', {
    params: { chatRoomId },
  });

  return res.data;
};
