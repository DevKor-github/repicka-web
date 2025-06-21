import type { PropsWithChildren } from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';

/**
 * 모바일에서 봤을 때 짤림 영역이 (아마도)없는 AppScreen
 */
const AppScreenWithSafeArea = ({ children }: PropsWithChildren) => {
  return (
    <AppScreen>
      <div
        style={{
          position: 'absolute',
          top: 'calc(env(safe-area-inset-top))',
          left: 'calc(env(safe-area-inset-left))',
          right: 'calc(env(safe-area-inset-right))',
          bottom: 'calc(env(safe-area-inset-bottom))',
        }}
      >
        {children}
      </div>
    </AppScreen>
  );
};
export default AppScreenWithSafeArea;
