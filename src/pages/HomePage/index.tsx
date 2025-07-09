import { useNavigate } from 'react-router';

import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import RecentList from '@/features/home/components/RecentList';
import WriteButton from '@/features/home/components/WriteButton';

import * as s from './style.css';

import Banner from '@/features/home/components/Banner';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Container}>
        <Banner />
        <RecentList />
      </div>
      <div className={s.WriteButtonContainer}>
        <WriteButton onClick={() => navigate('/post')} />
      </div>
    </SafeArea>
  );
};

export default HomePage;
