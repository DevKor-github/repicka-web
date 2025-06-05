import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/routes/stack';
import { css } from '@styled-system/css';

const PostPage: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <AppScreen>
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
    </AppScreen>
  );
};
export default PostPage;
