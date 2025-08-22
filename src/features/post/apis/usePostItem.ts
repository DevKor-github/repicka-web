import client from '@/common/utils/client';
import type { PostItemRequest, PostPayload } from '../types/post';
import type { ItemDetailResponse } from '@/features/detail/types';
import { useMutation } from '@tanstack/react-query';
import { getFileKeys } from '@/common/utils/getFileKeys';

const postItem = async ({ data, files }: { data: PostPayload; files: File[] }) => {
  const fileKeys = await getFileKeys(files);

  const request: PostItemRequest = { ...data, images: fileKeys };
  const res = await client.post<ItemDetailResponse>('/api/v1/item', request);

  return res.data;
};

export const usePostItem = () =>
  useMutation({
    mutationFn: postItem,
    retry: 0,
  });
