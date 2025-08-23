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

    return res.data.data;
  } catch (error) {
    console.error(`presigned URL 요청 실패 (${file.name}):`, error);
    throw error;
  }
};
