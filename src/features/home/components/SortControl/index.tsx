import { cx } from '@styled-system/css';

import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import Drawer from '@/common/components/Drawer';
import SortDrawer from '@/features/home/components/SortControl/SortDrawer';

const SortTriggerButton = () => {
  const { open, drawerState } = useDrawer();

  return (
    <>
      <button className={s.Container} onClick={open}>
        추천순
        <span className={cx('mgc_down_fill', s.Icon)} />
      </button>
      <Drawer title="정렬기준" drawerState={drawerState}>
        <SortDrawer />
      </Drawer>
    </>
  );
};
export default SortTriggerButton;
