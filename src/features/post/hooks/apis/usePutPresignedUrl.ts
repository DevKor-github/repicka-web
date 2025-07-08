// 클라이언트 -> S3로 파일 직접 업로드

import client from '@/common/utils/client';

export const putPresignedUrl = async (file: File, url: string) => {
  const res = await client.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return res;
};
