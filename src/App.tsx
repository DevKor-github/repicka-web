import useAuth from '@/utils/hooks/useAuth';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <h1>리피카 짱</h1>
      {isLoggedIn ? (
        <div>안녕하세오</div>
      ) : (
        <>
          <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
          <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
        </>
      )}
    </div>
  );
}

export default App;
