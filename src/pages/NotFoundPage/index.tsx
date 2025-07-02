import type { ActivityComponentType } from '@stackflow/react';
import { useFlow } from '@/libs/routes/stack';

import * as c from '@/utils/commonStyles.css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';

const NotFoundPage: ActivityComponentType = () => {
  const { pop } = useFlow();

  return (
    <AppScreenWithSafeArea>
      <button className={c.Button} onClick={pop}>
        뒤로가기
      </button>
      <h1>페이지를 찾을 수 없어요 . . .</h1>
    </AppScreenWithSafeArea>
  );
};
export default NotFoundPage;
