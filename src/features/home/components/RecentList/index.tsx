import PostCard from '@/features/home/components/PostCard';
import { useGetPostList } from '@/features/home/hooks/apis/useGetPostList';

import * as s from './style.css';

const RecentList = () => {
  const { data: postList } = useGetPostList();

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>최신 상품</h2>
      <div className={s.PostList}>{postList?.map(post => <PostCard key={post.id} data={post} />)}</div>
    </div>
  );
};
export default RecentList;
