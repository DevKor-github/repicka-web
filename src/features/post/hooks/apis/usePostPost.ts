// 백엔드에 post, s3에 파일 업로드
// presignedUrls 링크로 파일 보내기 (반복문)
// presignedUrl 개수만큼 put 함수 호출, 한번 호출 시 file 하나씩 보내기

import client from '@/common/utils/client';
import { collectPostDate } from '../collectPostData';
import { s3PutImageToUrl } from './usePutPresignedUrl';

export const postPost = async (fileKeys: string[], files: File[], presignedUrls: string[]) => {
  await Promise.all(presignedUrls.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  // TODO: 글 올리는 거 막아 둠

  // const data = collectPostDate(fileKeys);
  // const res = await client.post('/api/v1/item', data);

  // return res;
};
