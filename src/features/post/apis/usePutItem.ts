import { s3PutImageToUrl } from '@/common/apis/s3PutImageToUrl';
import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

const putItem = async (itemId: number) => {
  const res = await client.put(`/api/v1/${itemId}`);

  return res.data;
};

export const usePutItem = () => {
  useMutation({
    mutationFn: putItem,
    retry: 0,
  });
};
