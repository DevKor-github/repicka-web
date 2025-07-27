import client from '@/common/utils/client';
import { getPresignedUrl } from './useGetPresignedUrl';
import { s3PutImageToUrl } from './usePutPresignedUrl';
import type { PostItemRequest, PostPayload } from '../types/post';
import type { ItemDetailResponse } from '@/features/detail/types';
import { useMutation } from '@tanstack/react-query';

const postItem = async ({ data, files }: { data: PostPayload; files: File[] }) => {
  const getUrlResult = await Promise.all(files.map(file => getPresignedUrl(file)));
  const presignedUrls = getUrlResult.map(result => result.presignedUrl as string);
  const fileKeys = getUrlResult.map(result => result.fileKey as string);

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
