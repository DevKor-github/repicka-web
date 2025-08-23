import { useParams } from 'react-router';
import { formatDate } from 'date-fns';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import { useGetPickDetail } from '@/features/pick/apis/useGetPickDetail';
import ItemCard from '@/features/home/components/ItemCard';
import useGetItemDetail from '@/features/detail/apis/useGetItemDetail';
import getItemInterfaceFromItemDetail from '@/common/utils/getItemInterfaceFromItemDetail';
import NotFoundPage from '@/pages/NotFoundPage';

interface InfoItemProps {
  title: string;
  value: string;
}
const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <div className={s.Item}>
      <label>{title}</label>
      <p>{value}</p>
    </div>
  );
};

const PickDetailPage = () => {
  const { id } = useParams();
  const { data, isError } = useGetPickDetail(Number(id));
  const { data: itemData } = useGetItemDetail(data?.itemId);

  const handleEdit = () => {
    alert('수정!');
  };

  const isSale = data?.type === 'SALE';
  const isParcel = data?.tradeMethod === 'PARCEL';

  if (isError) return <NotFoundPage />;

  if (data === undefined || itemData === undefined) return null;

  return (
    <SafeArea>
      <div className={s.Container}>
        <div className={s.InfoText}>내가 요청한 {isSale ? '판매' : '대여'} 정보예요 🔥</div>
        <div className={s.Contents}>
          <div className={s.PickInfo}>
            <div className={s.ItemBlock}>
              <ItemCard data={getItemInterfaceFromItemDetail(itemData)} />
            </div>
            <div className={s.Block}>
              <InfoItem
                title={isSale ? '판매 일자' : '대여 기간'}
                value={
                  data.returnDate === null
                    ? formatDate(data.rentalDate, 'yy.MM.dd')
                    : `${formatDate(data.rentalDate, 'yy.MM.dd')} ~ ${formatDate(data.returnDate, 'yy.MM.dd')}`
                }
              />
            </div>
            {!isParcel && (
              <>
                <div className={s.Block}>
                  <InfoItem title={isSale ? '판매 장소' : '대여 장소'} value={data.rentalLocation} />
                  <InfoItem
                    title={isSale ? '판매 일시' : '대여 일시'}
                    value={formatDate(data.rentalDate, 'yy.MM.dd HH시 mm분')}
                  />
                </div>
                {data.returnDate !== null && data.returnLocation !== null && (
                  <div className={s.Block}>
                    <InfoItem title={'반납 장소'} value={data.returnLocation} />
                    <InfoItem title={'반납 일시'} value={formatDate(data.returnDate, 'yy.MM.dd HH시 mm분')} />
                  </div>
                )}
              </>
            )}
          </div>
          <button className={s.EditButton} onClick={handleEdit}>
            <span className="mgc_edit_4_fill" />
            수정하기
          </button>
        </div>
      </div>
    </SafeArea>
  );
};
export default PickDetailPage;
