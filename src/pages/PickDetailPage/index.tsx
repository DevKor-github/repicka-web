import { useNavigate, useParams } from 'react-router';
import { formatDate } from 'date-fns';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import { useGetPickDetail } from '@/features/pick/apis/useGetPickDetail';
import ItemCard from '@/features/home/components/ItemCard';
import useGetItemDetail from '@/features/detail/apis/useGetItemDetail';
import getItemInterfaceFromItemDetail from '@/common/utils/getItemInterfaceFromItemDetail';
import NotFoundPage from '@/pages/NotFoundPage';
import CustomHeader from '@/common/components/CustomHeader';
import DetailBottom from '@/features/pick/components/DetailBottom';
import { cx } from '@styled-system/css';
import { ko } from 'date-fns/locale/ko';

interface InfoItemProps {
  title: string;
  value: string;
  bold?: boolean;
}
const InfoItem = ({ title, value, bold = false }: InfoItemProps) => {
  return (
    <div className={s.Item({ bold })}>
      <label>{title}</label>
      <p>{value}</p>
    </div>
  );
};

const PickDetailPage = () => {
  const navigate = useNavigate();
  const { id: idString } = useParams();
  const id = Number(idString);
  const { data, isError } = useGetPickDetail(id);
  const { data: itemData } = useGetItemDetail(data?.itemId);

  const handleEdit = () => {
    navigate(`/edit-pick/${id}`);
  };

  const onChatBtnClick = () => {
    navigate(`/chat/${data?.chatRoomId}`);
  };

  if (isError) return <NotFoundPage />;

  if (data === undefined || itemData === undefined) return null;

  const isSale = data.type === 'SALE';
  const isParcel = data.tradeMethod === 'PARCEL';

  const canEdit = data.state === 'CONFIRMED' || data.state === 'PENDING';

  return (
    <SafeArea>
      <div className={s.Wrapper}>
        <CustomHeader title="PICK 확인" onClick={() => navigate(-1)} />
        <div className={s.Container}>
          <div className={s.InfoText}>
            {data.isCreator
              ? `내가 요청한 ${isSale ? '판매' : '대여'} 정보예요 🔥`
              : `${data.opponentNickname}님께서 요청하신 ${isSale ? '판매' : '대여'} 정보예요 🔥`}
          </div>
          <div className={s.Contents}>
            <div className={s.PickInfo}>
              <div className={s.ItemBlock}>
                <ItemCard data={getItemInterfaceFromItemDetail(itemData)} />
              </div>
              <div className={s.Block}>
                <InfoItem title="거래 방식" value={data.tradeMethod === 'PARCEL' ? '택배' : '직거래'} />
              </div>
              <div className={s.Block}>
                <InfoItem
                  title={isSale ? '발송 일자' : '대여 기간'}
                  value={
                    data.returnDate === null
                      ? formatDate(data.rentalDate, 'yy.MM.dd. (eee)', { locale: ko })
                      : `${formatDate(data.rentalDate, 'yy.MM.dd. (eee)', { locale: ko })} ~ ${formatDate(data.returnDate, 'yy.MM.dd. (eee)', { locale: ko })}`
                  }
                />
              </div>
              {!isParcel && (
                <>
                  <div className={s.Block}>
                    <InfoItem title={isSale ? '판매 장소' : '대여 장소'} value={data.rentalLocation} />
                    <InfoItem
                      title={isSale ? '판매 일시' : '대여 일시'}
                      value={formatDate(data.rentalDate, 'yy.MM.dd. (eee) HH시 mm분', { locale: ko })}
                    />
                  </div>
                  {data.returnDate !== null && data.returnLocation !== null && (
                    <div className={s.Block}>
                      <InfoItem title={'반납 장소'} value={data.returnLocation} />
                      <InfoItem
                        title={'반납 일시'}
                        value={formatDate(data.returnDate, 'yy.MM.dd. (eee) HH시 mm분', { locale: ko })}
                      />
                    </div>
                  )}
                </>
              )}
              <div className={s.Block}>
                <InfoItem
                  title={'총 가격'}
                  value={
                    data.type === 'SALE'
                      ? `${data.price.toLocaleString()}원`
                      : `대여료 ${data.price.toLocaleString()}원 + 보증금 ${data.deposit.toLocaleString()}원`
                  }
                  bold
                />
              </div>
            </div>
            {canEdit && (
              <button className={s.EditButton} onClick={handleEdit}>
                <span className="mgc_edit_4_fill" />
                수정하기
              </button>
            )}
          </div>
        </div>
        <button className={s.ToChat} onClick={onChatBtnClick}>
          <div className={cx('mgc_chat_1_fill', s.ChatIcon)} />
          채팅으로
        </button>
        <DetailBottom
          id={id}
          itemId={data.itemId}
          isCreator={data.isCreator}
          pickState={data.state}
          chatRoomId={data.chatRoomId}
        />
      </div>
    </SafeArea>
  );
};
export default PickDetailPage;
