import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';
import type { ReviewRequest } from '../types/review';
import { useHandleError } from '@/common/hooks/useHandleError';

const postReview = async (data: ReviewRequest) => {
  const res = await client.post('api/v1/review', data);

  return res.data;
};

export const usePostReview = () => {
  const handleError = useHandleError();

  useMutation({
    mutationFn: postReview,
    retry: 0,
    onError: error => handleError(error, '리뷰 작성에 실패했어요'),
  });
};
