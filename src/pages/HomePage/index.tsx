import { useNavigate } from 'react-router';

import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import RecentList from '@/features/home/components/RecentList';
import WriteButton from '@/features/home/components/WriteButton';

import * as s from './style.css';

import { NAVIGATOR_HEIGHT_PX } from '@/libs/constants/sizes';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <MainTopBar />
      <div
        className={s.Container}
        style={{ height: `calc(100% - ${NAVIGATOR_HEIGHT_PX}px)`, marginBottom: `${NAVIGATOR_HEIGHT_PX}px` }}
      >
        <RecentList />
      </div>
      <div className={s.WriteButtonContainer} style={{ bottom: `calc(1.06rem + ${NAVIGATOR_HEIGHT_PX}px)` }}>
        <WriteButton onClick={() => navigate('/post')} />
      </div>
    </SafeArea>
  );
};

export default HomePage;
