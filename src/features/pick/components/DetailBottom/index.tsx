import { usePatchCancelPick } from '@/features/pick/apis/usePatchCancelPick';
import * as s from './style.css';
import { usePatchConfirmPick } from '@/features/pick/apis/usePatchConfirmPick';
import type { PickStatus } from '@/libs/types/pick';
import { useNavigate } from 'react-router';
import { useToast } from '@/common/hooks/useToast';
import { useState } from 'react';
import CustomAlert from '@/common/components/CustomAlert';

const PICK_EXPIRED_MESSAGE: Record<Exclude<PickStatus, 'PENDING' | 'CONFIRMED'>, string> = {
  CANCELLED: '취소된 PICK이에요',
  EXPIRED: '만료된 PICK이에요',
  IN_PROGRESS: '진행중인 PICK이에요',
  SUCCESS: '완료된 PICK이에요',
};

interface Props {
  id: number;
  itemId: number;
  isCreator: boolean;
  pickState: PickStatus;
  chatRoomId: number;
}
const DetailBottom = ({ id, itemId, isCreator, pickState, chatRoomId }: Props) => {
  const navigate = useNavigate();
  const { mutate: cancel } = usePatchCancelPick();
  const { mutate: confirm } = usePatchConfirmPick();
  const { openToast } = useToast();
  const [showAlert, setShowAlert] = useState(false);

  const cancelType = isCreator ? '취소' : pickState === 'PENDING' ? '거절' : '취소';

  const onNo = () => {
    setShowAlert(false);
  };

  const handleAlert = () => {
    setShowAlert(true);
  };

  const cancelPick = () => {
    cancel(id, {
      onSuccess: () => {
        navigate(`/detail/${itemId}`, { replace: true });
        setShowAlert(false);
        openToast({ message: 'PICK이 취소되었어요' });
      },
    });
  };

  const confirmPick = () => {
    confirm(id, {
      onSuccess: () => {
        navigate(`/chatroom/${chatRoomId}`, { replace: true });
        openToast({ message: 'PICK이 확정되었어요' });
      },
    });
  };

  const canChangeState = pickState === 'PENDING' || pickState === 'CONFIRMED';

  return (
    <div className={s.Container}>
      {canChangeState ? (
        isCreator ? (
          <button className={s.Button({ color: 'gray' })} onClick={handleAlert}>
            PICK 취소하기
          </button>
        ) : (
          <>
            <button className={s.Button({ color: 'gray' })} onClick={handleAlert}>
              {pickState === 'PENDING' ? '거절하기' : 'PICK 취소하기'}
            </button>
            {pickState === 'PENDING' && (
              <button className={s.Button({ color: 'main' })} onClick={confirmPick}>
                수락하기
              </button>
            )}
          </>
        )
      ) : (
        <div className={s.Button({ color: 'gray' })}>{PICK_EXPIRED_MESSAGE[pickState]}</div>
      )}
      {showAlert && (
        <CustomAlert
          onYes={cancelPick}
          subTitle={`정말 ${cancelType}하실 건가요?`}
          title={`PICK을 ${cancelType}하면 기존 내용은 사라져요.`}
          yesBtn={`네, ${cancelType}할래요`}
          onNo={onNo}
        />
      )}
    </div>
  );
};
export default DetailBottom;
