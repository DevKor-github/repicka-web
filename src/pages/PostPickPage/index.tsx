import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import Btn from '@/common/components/Button';
import ItemCard from '@/features/home/components/ItemCard';
import useGetItemDetail from '@/features/detail/apis/useGetItemDetail';
import NotFoundPage from '@/pages/NotFoundPage';
import getItemInterfaceFromItemDetail from '@/common/utils/getItemInterfaceFromItemDetail';
import type { TradeMethods, TransactionType } from '@/libs/types/item';
import Caution from '@/features/pick/components/Caution';
import PriceBox from '@/features/pick/components/PriceBox';
import { useGetItemStatus } from '@/features/detail/apis/useGetItemStatus';
import PlaceBox from '@/features/pick/components/PlaceBox';
import DateTimeBox from '@/features/pick/components/DateTimeBox';

const PostPickPage = () => {
  const navigate = useNavigate();
  const { id, type, method } = useParams();
  const itemId = Number(id);
  const transactionType = type as TransactionType;
  const tradeMethod = method as TradeMethods;
  const { data: itemData, isLoading: isItemDetailLoading, isSuccess: isItemDetailSuccess } = useGetItemDetail(itemId);
  const { data: itemStatus, isLoading: isItemStatusLoading, isSuccess: isItemStatusSuccess } = useGetItemStatus(itemId);

  const [negotiationPrice, setNegotiationPrice] = useState<number>(NaN);
  const [negotiationDeposit, setNegotiationDeposit] = useState<number>(NaN);
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);

  useEffect(() => {
    if (isItemStatusSuccess && itemStatus.isPresent) {
      navigate(-1);
    }
  }, [isItemStatusSuccess, itemStatus, navigate]);

  useEffect(() => {
    // 초기값 설정
    if (isItemDetailSuccess) {
      setStartLocation(itemData.itemInfo.location);
      setEndLocation(itemData.itemInfo.location);
    }
  }, [isItemDetailSuccess, itemData?.itemInfo]);

  if (isItemDetailLoading || isItemStatusLoading) return null;

  if (itemData === undefined) return <NotFoundPage />;

  return (
    <SafeArea>
      {/* TODO: 헤더 공용 컴포넌트 사용 */}
      <div className={s.Wrapper}>
        <header className={s.Header}>
          <button className="mgc_left_fill" onClick={() => navigate(-1)} />
          PICK 생성
        </header>
        <div className={s.Container}>
          <div className={s.ItemContainer}>
            <ItemCard data={getItemInterfaceFromItemDetail(itemData)} />
          </div>
          {tradeMethod === 'DIRECT' && (
            <PlaceBox
              transactionType={transactionType}
              startLocation={startLocation}
              endLocation={endLocation}
              setStartLocation={setStartLocation}
              setEndLocation={setEndLocation}
              startPlaceholder={itemData.itemInfo.location}
              endPlaceholder={itemData.itemInfo.location}
            />
          )}
          <DateTimeBox
            transactionType={transactionType}
            tradeMethod={tradeMethod}
            startDateTime={startDateTime}
            endDateTime={endDateTime}
            setStartDateTime={setStartDateTime}
            setEndDateTime={setEndDateTime}
          />
          <PriceBox
            itemInfo={itemData.itemInfo}
            transactionType={transactionType}
            negotiationPrice={negotiationPrice}
            negotiationDeposit={negotiationDeposit}
            setNegotiationPrice={setNegotiationPrice}
            setNegotiationDeposit={setNegotiationDeposit}
          />
          {tradeMethod === 'PARCEL' && <Caution />}
        </div>
        <div className={s.SaveButtonContainer}>
          <Btn mode="main">저장하기</Btn>
        </div>
      </div>
    </SafeArea>
  );
};
export default PostPickPage;
