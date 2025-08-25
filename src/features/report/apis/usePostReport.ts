import { useHandleError } from '@/common/hooks/useHandleError';
import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

export const Category_ARRAY = ['OFFENSIVE', 'SEXUAL_CONTENT', 'FAKE_ITEM', 'PRIVACY', 'SPAM', 'OTHER'] as const;
export type CategoryType = (typeof Category_ARRAY)[number];

interface PostInterface {
  reportedUserId: number;
  itemId: number;
  location: 'POST' | 'CHATROOM';
  categories: CategoryType[];
  description: string | null;
}

const postReport = async ({ body }: { body: PostInterface }) => {
  const res = await client.post('api/v1/user/report', body);

  return res.data;
};

export const usePostReport = () => {
  const handleError = useHandleError();

  return useMutation({
    mutationFn: postReport,
    onError: error => handleError(error, '신고에 실패했어요'),
  });
};
