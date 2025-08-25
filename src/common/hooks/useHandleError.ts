import { useToast } from '@/common/hooks/useToast';
import type { ErrorResponse } from '@/libs/types';
import { isAxiosError } from 'axios';

export const useHandleError = () => {
  const { openToast } = useToast();

  const handleError = (error: Error, customMessage?: string) => {
    if (isAxiosError<ErrorResponse>(error)) {
      openToast({
        message: error.response?.data.message || customMessage || '알 수 없는 오류가 발생했습니다',
      });
    }
  };

  return handleError;
};
