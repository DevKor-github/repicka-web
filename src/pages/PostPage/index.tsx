import type { ActivityComponentType } from '@stackflow/react';
import { useFlow } from '@/libs/routes/stack';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
import * as s from './style.css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';

const PostPage: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <AppScreenWithSafeArea>
      <button className={s.Button} onClick={pop}>
        뒤로가기
      </button>
      <div>테스트 테스트 포스트 페이지</div>
    </AppScreenWithSafeArea>
  );
};
export default PostPage;
