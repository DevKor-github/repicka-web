import { useNavigate } from 'react-router';

import * as s from './style.css';

import Btn from '@/common/components/Button';
import type { ItemInfoInterface } from '@/features/detail/types';
import { useGetItemStatus } from '@/features/detail/apis/useGetItemStatus';
import { usePostChatroom } from '@/features/detail/apis/usePostChatroom';
import useGetIsLogin from '@/common/apis/useGetIsLogin';
import PickButton from '@/features/detail/components/PickButton';

interface Props {
  itemId: number;
  itemInfo: ItemInfoInterface;
}
const BottomActions = ({ itemId, itemInfo }: Props) => {
  const navigate = useNavigate();

  const { transactionTypes, mine } = itemInfo;
  const { data: itemStatusData, isSuccess: isItemStatusSuccess, isLoading } = useGetItemStatus(itemId);

  const { mutate: createChatroom } = usePostChatroom();
  const { data: isLogin, isSuccess: isLoginSuccess } = useGetIsLogin();

  const handleChatClick = () => {
    if (!isLoginSuccess) return;

    if (!isLogin) {
      navigate('/login', { replace: true });
      return;
    }

    if (isLoading) return;

    if (itemStatusData === undefined) {
      navigate(`/chat-about/${itemId}`);
      return;
    }

    if (itemStatusData.chatRoomId) {
      navigate(`/chatroom/${itemStatusData.chatRoomId}`);
      return;
    }

    createChatroom(itemId, {
      onSuccess: data => {
        navigate(`/chatroom/${data.data.chatRoom.chatRoomId}`);
      },
    });
  };

  return (
    <div className={s.Container}>
      <Btn className={s.ChatButton({ isMine: mine })} onClick={handleChatClick}>
        <span className="mgc_chat_2_fill" />
        {mine && <p>채팅</p>}
      </Btn>
      {!mine && isItemStatusSuccess && itemStatusData.isPresent ? (
        <div className={s.PickButtonContainer}>
          <button
            className={s.AlreadyPickedButton}
            onClick={() => navigate(`/pick-detail/${itemStatusData.appointment.appointmentId}`)}
          >
            <p>진행 중인 PICK이 있어요</p>
            <div>PICK 바로 가기</div>
          </button>
        </div>
      ) : !mine ? (
        <div className={s.PickButtonContainer}>
          {transactionTypes.map((type, index) => {
            return <PickButton key={type} itemId={itemId} type={type} index={index} itemInfo={itemInfo} />;
          })}
        </div>
      ) : null}
    </div>
  );
};
export default BottomActions;
