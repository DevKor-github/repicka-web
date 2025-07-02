import { useNavigate } from 'react-router';
import PostCard from './postCard';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
// import * as s from './style.css';

import * as c from '@/utils/commonStyles.css';

import SafeArea from '@/common/components/SafeArea';

const PostPage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <button className={c.Button} onClick={() => navigate(-1)}>
        뒤로가기
      </button>
      <div>테스트 테스트 포스트 페이지</div>
      <PostCard />
      <PostCard />
      <PostCard />
    </SafeArea>
  );
};
export default PostPage;
