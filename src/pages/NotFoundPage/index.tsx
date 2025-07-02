import SafeArea from '@/common/components/SafeArea';

import Chip from '@/common/components/Chip';

// TODO: BASE_URL 추후 수정
const BASE_URL = import.meta.env.VITE_BASE_URL || '';

const NotFoundPage = () => {
  return (
    <SafeArea>
      <Chip onClick={() => (window.location.href = BASE_URL + '/')}>홈으로 가기</Chip>
      <h1>페이지를 찾을 수 없어요 . . .</h1>
    </SafeArea>
  );
};
export default NotFoundPage;
