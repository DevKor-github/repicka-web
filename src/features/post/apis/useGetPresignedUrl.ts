// 클라이언트 -> 백엔드로 presigned url 요청
// 캐싱 필요없고 파일을 순회, 반복문 내에서 호출해야 돼서 리액트 쿼리 훅 안 써도 될 것 같은데 선생님 의견이 궁금합니다

import client from '@/common/utils/client';

export const getPresignedUrl = async (file: File) => {
  try {
    const res = await client.get('/api/v1/item/presigned-url', {
      params: {
        fileName: file.name,
        contentType: file.type,
        fileSize: file.size,
      },
    });

    console.log(file.size);

    return res.data.data;
  } catch (error) {
    console.error(`presigned URL 요청 실패 (${file.name}):`, error);
    throw error;
  }
};
