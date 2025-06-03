import { useFlow } from '@/libs/routes/stack';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';

const Home: ActivityComponentType = () => {
  const { push } = useFlow();
  return (
    <AppScreen>
      <h1>리피카 짱</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
        <i>백엔드에몽 로그인 고쳐줘</i>
        <button onClick={() => push('Post', {})}>이동</button>
      </div>
    </AppScreen>
  );
};

export default Home;
