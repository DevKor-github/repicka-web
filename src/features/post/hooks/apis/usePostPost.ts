import client from '@/common/utils/client';
import type { PostPayload } from '@/features/post/types/post';

export const postItem = async (payload: PostPayload) => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  const response = await client.post(`${import.meta.env.BASE_URL}}/api/v1/post`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
