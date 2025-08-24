import { usePatchCancelPick } from '@/features/pick/apis/usePatchCancelPick';
import * as s from './style.css';
import { usePatchConfirmPick } from '@/features/pick/apis/usePatchConfirmPick';
import type { PickStatus } from '@/libs/types/pick';

interface Props {
  id: number;
  isCreator: boolean;
  pickState: PickStatus;
}
const DetailBottom = ({ id, isCreator, pickState }: Props) => {
  const { mutate: cancel } = usePatchCancelPick();
  const { mutate: confirm } = usePatchConfirmPick();

  const cancelPick = () => cancel(id);
  const confirmPick = () => confirm(id);

  return (
    <div className={s.Container}>
      {isCreator ? (
        <button className={s.Button({ color: 'main' })} onClick={cancelPick}>
          PICK 취소하기
        </button>
      ) : (
        <>
          <button className={s.Button({ color: 'gray' })} onClick={cancelPick}>
            거절하기
          </button>
          {pickState === 'PENDING' && (
            <button className={s.Button({ color: 'main' })} onClick={confirmPick}>
              수락하기
            </button>
          )}
        </>
      )}
    </div>
  );
};
export default DetailBottom;
