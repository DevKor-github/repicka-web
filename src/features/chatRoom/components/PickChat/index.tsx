import { Link } from 'react-router';
import * as s from './style.css';

export const PickChat = () => {
  return (
    <div className={s.Container}>
      <div className={s.HeadText}>민채 님께서 설정하신 대여 정보가 도착했어요</div>
      <div className={s.Image} />
      <Link className={s.PickBtn} to={'api/pick'}>
        <div className={s.PickText}>PICK 확인하기</div>
      </Link>
    </div>
  );
};

export default PickChat;
