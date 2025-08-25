import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

const testFCMToken = async (token: string) => {
  const response = await client.post('/api/test/fcm', token, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
  return response.data;
};

export const useTestFCMToken = () => {
  return useMutation({
    mutationFn: testFCMToken,
  });
};
