import client from '@/common/utils/client';
import type { PostItemRequest, PostPayload } from '../types/post';
import type { ItemDetailResponse } from '@/features/detail/types';
import { useMutation } from '@tanstack/react-query';
import { s3PutImageToUrl } from '@/common/apis/s3PutImageToUrl';

const putItem = async ({
  data,
  localFileKeys,
  serverFileKeys,
  files,
  presignedUrls,
  itemId,
}: {
  data: PostPayload;
  localFileKeys: string[];
  serverFileKeys: string[];
  files: File[];
  presignedUrls: string[];
  itemId: number;
}) => {
  await Promise.all(presignedUrls.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  const fileKeys = [...serverFileKeys, ...localFileKeys];

  const request: PostItemRequest = { ...data, images: fileKeys };
  const res = await client.put<ItemDetailResponse>(`/api/v1/item/${itemId}`, request);

  return res.data;
};

export const usePutItem = () =>
  useMutation({
    mutationFn: putItem,
    retry: 0,
  });
