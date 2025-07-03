import type { PropsWithChildren } from 'react';

import * as s from './style.css';

const Token = ({ children }: PropsWithChildren) => {
  return <span className={s.Container}>{children}</span>;
};
export default Token;
