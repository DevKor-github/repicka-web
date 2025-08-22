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
      // TODO: 아이템과 관련된 내 채팅방으로 연결
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

  // TODO: PICK 구현 후 하단 바텀 액션 보여주는 조건 분기 테스트
  return (
    <div className={s.Container}>
      <Btn className={s.ChatButton({ isMine: mine })} onClick={handleChatClick}>
        <span className="mgc_chat_2_fill" />
        {mine && <p>채팅</p>}
      </Btn>
      {!mine && isItemStatusSuccess && itemStatusData.isPresent ? (
        <div className={s.PickButtonContainer}>
          {/* TODO: 이미 있는 픽 표시 */}
          <PickButton itemId={itemId} type={itemStatusData.appointment.type} index={0} itemInfo={itemInfo} />
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
