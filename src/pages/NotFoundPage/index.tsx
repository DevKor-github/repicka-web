import { useNavigate } from 'react-router';

import Chip from '@/common/components/Chip';
import SafeArea from '@/common/components/SafeArea';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <Chip onClick={() => navigate('/')}>홈으로 가기</Chip>
      <h1>페이지를 찾을 수 없어요 . . .</h1>
    </SafeArea>
  );
};
export default NotFoundPage;
