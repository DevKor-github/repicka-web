import client from '@/common/utils/client';
import type { PostItemRequest, PostPayload } from '../types/post';
import type { ItemDetailResponse } from '@/features/detail/types';
import { useMutation } from '@tanstack/react-query';
import { s3PutImageToUrl } from '@/common/apis/s3PutImageToUrl';

const postItem = async ({
  data,
  fileKeys,
  files,
  presignedUrls,
}: {
  data: PostPayload;
  fileKeys: string[];
  files: File[];
  presignedUrls: string[];
}) => {
  await Promise.all(presignedUrls.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  const request: PostItemRequest = { ...data, images: fileKeys };
  const res = await client.post<ItemDetailResponse>('/api/v1/item', request);

  return res.data;
};

export const usePostItem = () =>
  useMutation({
    mutationFn: postItem,
    retry: 0,
  });
