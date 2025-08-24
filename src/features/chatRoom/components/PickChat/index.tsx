import { Link } from 'react-router';
import * as s from './style.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  marginTop: string;
  isMine?: boolean;
  pickId: number;
}

const PickChat = ({ isMine, marginTop, children, pickId }: Props) => {
  return (
    <div className={s.Container({ isMine })} style={{ marginTop: marginTop }}>
      <div className={s.HeadText}>{children}</div>
      <div className={s.Image} />
      <Link className={s.PickBtn} to={`/pick-detail/${pickId}`}>
        <div className={s.PickText}>PICK 확인하기</div>
      </Link>
    </div>
  );
};

export default PickChat;
