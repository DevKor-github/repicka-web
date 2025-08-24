import { usePatchCancelPick } from '@/features/pick/apis/usePatchCancelPick';
import * as s from './style.css';
import { usePatchConfirmPick } from '@/features/pick/apis/usePatchConfirmPick';
import type { PickStatus } from '@/libs/types/pick';
import { useNavigate } from 'react-router';

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
}
const DetailBottom = ({ id, itemId, isCreator, pickState }: Props) => {
  const navigate = useNavigate();
  const { mutate: cancel } = usePatchCancelPick();
  const { mutate: confirm } = usePatchConfirmPick();

  const cancelPick = () => {
    cancel(id, {
      onSuccess: () => {
        navigate(`/detail/${itemId}`);
      },
    });
  };
  const confirmPick = () => {
    confirm(id, {
      onSuccess: () => {
        // TODO: 채팅방 이동
        navigate(`/chat`);
      },
    });
  };

  const canChangeState = pickState === 'PENDING' || pickState === 'CONFIRMED';

  return (
    <div className={s.Container}>
      {canChangeState ? (
        isCreator ? (
          <button className={s.Button({ color: 'main' })} onClick={cancelPick}>
            PICK 취소하기
          </button>
        ) : (
          <>
            <button className={s.Button({ color: 'gray' })} onClick={cancelPick}>
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
    </div>
  );
};
export default DetailBottom;
