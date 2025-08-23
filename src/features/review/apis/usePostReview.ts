import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';
import type { ReviewRequest } from '../types/review';

const postReview = async (data: ReviewRequest) => {
  const res = await client.post('api/v1/review', data);

  return res.data;
};

export const usePostReview = () =>
  useMutation({
    mutationFn: postReview,
    retry: 0,
  });
