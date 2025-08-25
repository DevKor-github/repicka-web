import { useMutation } from '@tanstack/react-query';

import client from '@/common/utils/client';

const patchFCMToken = async (token: string) => {
  const response = await client.patch('/api/v1/user/fcm-token', token, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
  return response.data;
};

export const usePatchFCMToken = () => {
  return useMutation({
    mutationFn: patchFCMToken,
  });
};
