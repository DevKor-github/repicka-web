import { useMutation } from '@tanstack/react-query';

import client from '@/common/utils/client';
import { useHandleError } from '@/common/hooks/useHandleError';

const patchFCMToken = async (token: string) => {
  const response = await client.patch('/api/v1/user/fcm-token', token, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
  return response.data;
};

export const usePatchFCMToken = () => {
  const handleError = useHandleError();
  return useMutation({
    mutationFn: patchFCMToken,
    onError: error => handleError(error, '푸시 알림 설정에 실패했어요'),
  });
};
