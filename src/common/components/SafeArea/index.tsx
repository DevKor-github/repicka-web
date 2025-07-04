import type { PropsWithChildren } from 'react';

import * as s from './style.css';

/**
 * 모바일에서 봤을 때 짤림 영역이 (아마도)없는 AppScreen
 */
const SafeArea = ({ children }: PropsWithChildren) => {
  return <div className={s.Container}>{children}</div>;
};
export default SafeArea;
