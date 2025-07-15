// 백엔드에 post, s3에 파일 업로드
// presignedUrls 링크로 파일 보내기 (반복문)
// presignedUrl 개수만큼 put 함수 호출, 한번 호출 시 file 하나씩 보내기

import client from '@/common/utils/client';
import { getPresignedUrl } from '../../apis/useGetPresignedUrl';
import { s3PutImageToUrl } from '../../apis/usePutPresignedUrl';
import type { PostItemRequest, PostPayload } from '../../types/post';
import type { ItemDetailResponse } from '@/features/detail/types';
import { useMutation } from '@tanstack/react-query';

const postItem = async ({ data, files }: { data: PostPayload; files: File[] }) => {
  const presignedResults = await Promise.all(files.map(file => getPresignedUrl(file)));
  const presignedUrl = presignedResults.map(result => result.presignedUrl as string);

  await Promise.all(presignedUrl.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  const request: PostItemRequest = { ...data, images: presignedUrl };
  const res = await client.post<PostItemRequest, ItemDetailResponse>('/api/v1/item', request);

  return res;
};

export const usePostItem = () => {
  return useMutation({
    mutationFn: postItem,
  });
};
