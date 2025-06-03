const Home = () => {
  return (
    <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <h1>리피카 짱</h1>
      <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
      <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
      <i>백엔드에몽 로그인 고쳐줘</i>
    </div>
  );
};

export default Home;
