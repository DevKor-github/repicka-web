import { useNavigate } from 'react-router';

import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import RecentList from '@/features/home/components/RecentList';
import WriteButton from '@/features/home/components/WriteButton';

import * as s from './style.css';

import { HOME_HEADER_HEIGHT_PX, NAVIGATOR_HEIGHT_PX } from '@/libs/constants/sizes';
import Banner from '@/features/home/components/Banner';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <MainTopBar />
      <div
        className={s.Container}
        style={{
          height: `calc(100% - ${NAVIGATOR_HEIGHT_PX}px - ${HOME_HEADER_HEIGHT_PX}px)`, // 정말 코드 마음에 안드네
          marginBottom: `${NAVIGATOR_HEIGHT_PX}px`,
        }}
      >
        <Banner />
        <RecentList />
      </div>
      <div className={s.WriteButtonContainer} style={{ bottom: `calc(1.06rem + ${NAVIGATOR_HEIGHT_PX}px)` }}>
        <WriteButton onClick={() => navigate('/post')} />
      </div>
    </SafeArea>
  );
};

export default HomePage;
