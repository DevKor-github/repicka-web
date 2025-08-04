import { cx } from '@styled-system/css';

import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import Drawer from '@/common/components/Drawer';
import SortDrawer from '@/features/home/components/SortControl/SortDrawer';
import { useSearchParams } from 'react-router';
import { ItemOrderMap, type ItemOrderType } from '@/features/home/types';

const SortTriggerButton = () => {
  const { open, drawerState, close } = useDrawer();
  const [searchParams] = useSearchParams();
  const itemOrder = (searchParams.get('sort') || 'RECENT') as ItemOrderType;

  return (
    <>
      <button className={s.Container} onClick={open}>
        {ItemOrderMap[itemOrder]}
        <span className={cx('mgc_down_fill', s.Icon)} />
      </button>
      <Drawer title="정렬기준" drawerState={drawerState}>
        <SortDrawer close={close} />
      </Drawer>
    </>
  );
};
export default SortTriggerButton;
