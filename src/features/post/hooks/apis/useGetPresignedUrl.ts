// 클라이언트 -> 백엔드로 presigned url 요청

import client from '@/common/utils/client';

export const getPresignedUrl = async (file: File) => {
  const res = await client.get('/api/v1/post/presigned-url', {
    params: {
      fileName: file.name,
      contentType: file.type,
      fileSize: file.size,
    },
  });

  return res.data.data;
};
