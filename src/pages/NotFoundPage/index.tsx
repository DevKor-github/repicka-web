import { useNavigate } from 'react-router';

import SafeArea from '@/common/components/SafeArea';
import NoResult from '@/common/components/NoResult';
import Btn from '@/common/components/Button';
import * as s from './style.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <div className={s.Container}>
        <NoResult type="404" />
        <Btn mode="main" className={s.Button} onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Btn>
      </div>
    </SafeArea>
  );
};
export default NotFoundPage;
