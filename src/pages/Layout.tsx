import Navigator from '@/common/components/Navigator';
import { css } from '@styled-system/css';
import { Outlet } from 'react-router';

/**
 * 모든 페이지들이 공유하는 Layout이에요
 */
const Layout = () => {
  return (
    <div className={css({ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 })}>
      <Outlet />
      <Navigator />
    </div>
  );
};
export default Layout;
