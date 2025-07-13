// 백엔드에 post, s3에 파일 업로드
// presignedUrls 링크로 파일 보내기 (반복문)
// presignedUrl 개수만큼 put 함수 호출, 한번 호출 시 file 하나씩 보내기

import client from '@/common/utils/client';
import { collectPostData } from '../useCollectPostData';
import { s3PutImageToUrl } from '../../apis/usePutPresignedUrl';

export const postPost = async (fileKeys: string[], files: File[], presignedUrls: string[]) => {
  await Promise.all(presignedUrls.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  const data = collectPostData(fileKeys);
  const res = await client.post('/api/v1/item', data);

  return res;
};
