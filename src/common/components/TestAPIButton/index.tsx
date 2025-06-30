import useGetIsLogin from '@/common/hooks/apis/useGetIsLogin';

import * as s from './style.css';

const TestAPIButton = () => {
  const { refetch } = useGetIsLogin();
  return (
    <button className={s.Button} onClick={() => refetch()}>
      API 테스팅하기
    </button>
  );
};
export default TestAPIButton;
