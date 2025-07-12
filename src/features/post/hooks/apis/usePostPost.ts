import client from '@/common/utils/client';
import { collectPostDate } from './collectPostData';

export const postPost = async (presignedUrls: string[]) => {
  const data = collectPostDate(presignedUrls);

  console.log(data);
  const res = await client.post('/api/v1/item', data);

  console.log(res);
  return res;
};
