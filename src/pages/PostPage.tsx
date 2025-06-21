import type { ActivityComponentType } from '@stackflow/react';
import { useFlow } from '@/libs/routes/stack';
import { css } from '@styled-system/css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';

const PostPage: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <AppScreenWithSafeArea>
      <button
        className={css({
          padding: '1rem',
          backgroundColor: 'whiteSmoke',
          borderRadius: '10px',
        })}
        onClick={pop}
      >
        뒤로가기
      </button>
      <div>테스트 테스트 포스트 페이지</div>
    </AppScreenWithSafeArea>
  );
};
export default PostPage;
