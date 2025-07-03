import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import RecentList from '@/features/home/components/RecentList';

import * as s from './style.css';

import { NAVIGATOR_HEIGHT_PX } from '@/libs/constants/sizes';

const HomePage = () => {
  return (
    <SafeArea>
      <MainTopBar />
      <div
        className={s.Container}
        style={{ height: `calc(100% - ${NAVIGATOR_HEIGHT_PX}px)`, marginBottom: `${NAVIGATOR_HEIGHT_PX}px` }}
      >
        <RecentList />
      </div>
    </SafeArea>
  );
};

export default HomePage;
