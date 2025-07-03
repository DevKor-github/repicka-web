import type { PropsWithChildren } from 'react';

import * as s from './style.css';

/**
 * 모바일에서 봤을 때 짤림 영역이 (아마도)없는 AppScreen
 */
const SafeArea = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={s.Container}
      style={{
        top: 'calc(env(safe-area-inset-top))',
        left: 'calc(env(safe-area-inset-left))',
        right: 'calc(env(safe-area-inset-right))',
      }}
    >
      {children}
    </div>
  );
};
export default SafeArea;
