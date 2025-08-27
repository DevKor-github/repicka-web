import { useNavigate } from 'react-router';
import * as s from './style.css';
import type { ReactNode } from 'react';
import { useToast } from '@/common/hooks/useToast';

interface Props {
  children: ReactNode;
  marginTop: string;
  isMine?: boolean;
  isDeleted: boolean;
  pickId: number;
}

const PickChat = ({ isMine, marginTop, children, pickId, isDeleted }: Props) => {
  const navigate = useNavigate();
  const { openToast } = useToast();

  const onClick = () => {
    if (isDeleted) {
      openToast({ message: '삭제된 게시글에 대한 PICK입니다' });
      return;
    }
    navigate(`/pick-detail/${pickId}`);
  };

  return (
    <div className={s.Container({ isMine })} style={{ marginTop: marginTop }}>
      <div className={s.HeadText}>{children}</div>
      <div className={s.Image} />
      <button className={s.PickBtn({ isDeleted })} onClick={onClick}>
        <div className={s.PickText}>PICK 확인하기</div>
      </button>
    </div>
  );
};

export default PickChat;
