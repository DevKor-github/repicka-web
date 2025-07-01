import type { ActivityComponentType } from '@stackflow/react';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';

import Chip from '@/common/components/Chip';

const NotFoundPage: ActivityComponentType = () => {
  return (
    <AppScreenWithSafeArea>
      <Chip onClick={() => (window.location.href = import.meta.env.VITE_BASE_URL + '/')}>홈으로 가기</Chip>
      <h1>페이지를 찾을 수 없어요 . . .</h1>
    </AppScreenWithSafeArea>
  );
};
export default NotFoundPage;
