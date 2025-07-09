import Navigator from '@/common/components/Navigator';
import { Outlet, useLocation } from 'react-router';

import * as s from './style.css';

/**
 * 모든 페이지들이 공유하는 Layout이에요
 */
const Layout = () => {
  const { pathname } = useLocation();

  const visiblePaths = ['/', '/pick', '/chat', '/my'];
  const showNav = visiblePaths.includes(pathname);

  return (
    <div className={s.FlexContainer}>
      <div className={s.RelativeContainer}>
        <Outlet />
        {showNav && <Navigator />}
      </div>
    </div>
  );
};
export default Layout;
