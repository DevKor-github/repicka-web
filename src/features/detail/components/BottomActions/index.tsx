import Btn from '@/common/components/Button';
import { useNavigate } from 'react-router';

import * as s from './style.css';

import type { TransactionType } from '@/libs/types/item';
import type { ItemInfoInterface } from '@/features/detail/types';
import { useGetItemStatus } from '@/features/detail/apis/useGetItemStatus';
import { usePostChatroom } from '@/features/detail/apis/usePostChatroom';

interface PickButtonProps {
  type: TransactionType;
  index: number;
  salePrice: number;
  deposit: number;
  rentalFee: number;
}
const PickButton = ({ type, index, salePrice, deposit, rentalFee }: PickButtonProps) => {
  const color = index === 0 ? 'red' : 'blue';
  const label = type === 'RENTAL' ? '대여' : '구매';
  const priceText =
    type === 'RENTAL'
      ? `대여료+보증금 ${(deposit + rentalFee).toLocaleString()}원`
      : `판매가 ${salePrice.toLocaleString()}원`;

  const handlePickClick = () => {
    alert(`${type} 선택`);
  };

  return (
    <button className={s.PickButton({ color })} onClick={handlePickClick} aria-label={`${label}, ${priceText}`}>
      <span>{label}</span>
      <p>{priceText}</p>
    </button>
  );
};

interface Props {
  itemId: number;
  itemInfo: ItemInfoInterface;
}
const BottomActions = ({ itemId, itemInfo }: Props) => {
  const navigate = useNavigate();
  const { transactionTypes, mine, salePrice, deposit, rentalFee } = itemInfo;
  const { data: itemStatusData, isSuccess: isItemStatusSuccess } = useGetItemStatus(itemId);
  const { mutate: createChatroom } = usePostChatroom();

  // TODO: 실제 액션 추가
  const handleChatClick = () => {
    if (mine) {
      alert('내 채팅방으로 연결');
      return;
    }
    if (isItemStatusSuccess) {
      if (itemStatusData.data.chatRoomId) {
        navigate(`/chatroom/${itemStatusData.data.chatRoomId}`);
        return;
      }

      createChatroom(itemId, {
        onSuccess: data => {
          navigate(`/chatroom/${data.data.chatRoom.chatRoomId}`);
        },
      });
    }
  };

  return (
    <div className={s.Container}>
      <Btn className={s.ChatButton({ isMine: mine })} onClick={handleChatClick}>
        <span className="mgc_chat_2_fill" />
        {mine && <p>채팅</p>}
      </Btn>
      {!mine && (
        <div className={s.PickButtonContainer}>
          {transactionTypes.map((type, index) => {
            return (
              <PickButton
                key={type}
                type={type}
                index={index}
                salePrice={salePrice}
                deposit={deposit}
                rentalFee={rentalFee}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default BottomActions;
