import { Link } from 'react-router';
import * as s from './style.css';

interface Props {
  marginTop: string;
  isMine?: boolean;
}

export const PickChat = ({ isMine, marginTop }: Props) => {
  // TODO : 이름 넣기, pick으로 연결하기

  return (
    <div className={s.Container({ isMine })} style={{ marginTop: marginTop }}>
      <div className={s.HeadText}>유저이름최대열자열자 님께서 설정하신 대여 정보가 도착했어요</div>
      <div className={s.Image} />
      <Link className={s.PickBtn} to={'/pick'}>
        <div className={s.PickText}>PICK 확인하기</div>
      </Link>
    </div>
  );
};

export default PickChat;
