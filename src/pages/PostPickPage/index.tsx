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
import { usePostRentalAppointment } from '@/features/pick/apis/usePostRentalAppointment';
import { usePostSaleAppointment } from '@/features/pick/apis/usePostSaleAppointment';
import { formatDate, isBefore } from 'date-fns';

const PostPickPage = () => {
  const navigate = useNavigate();
  const { id, type, method } = useParams();
  const itemId = Number(id);
  const transactionType = type as TransactionType;
  const tradeMethod = method as TradeMethods;
  const { data: itemData, isLoading: isItemDetailLoading, isSuccess: isItemDetailSuccess } = useGetItemDetail(itemId);
  const { data: itemStatus, isLoading: isItemStatusLoading, isSuccess: isItemStatusSuccess } = useGetItemStatus(itemId);

  const { mutate: postRentalAppointment } = usePostRentalAppointment();
  const { mutate: postSaleAppointment } = usePostSaleAppointment();

  const [price, setPrice] = useState<number>(NaN);
  const [deposit, setDeposit] = useState<number>(NaN);
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);

  const submitValidation = (() => {
    if (transactionType === 'RENTAL') {
      if (tradeMethod === 'DIRECT') {
        return startLocation && endLocation && startDateTime && endDateTime ? true : false;
      }

      return startDateTime && endDateTime ? true : false;
    }

    if (tradeMethod === 'DIRECT') return startLocation && startDateTime ? true : false;

    return startDateTime ? true : false;
  })();

  const handleSubmit = () => {
    if (!submitValidation) return;

    if (transactionType === 'RENTAL') {
      if (isBefore(endDateTime as Date, startDateTime as Date)) {
        alert('대여 일시는 반납 일시보다 이전이어야 합니다.');
        return;
      }

      postRentalAppointment(
        {
          itemId,
          startDate: formatDate(startDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
          endDate: formatDate(endDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
          startLocation,
          endLocation,
          price,
          deposit,
          tradeMethod,
        },
        {
          onSuccess: response => {
            navigate(`/pick-detail/${response.currentAppointment.appointment.appointmentId}`, { replace: true });
          },
        },
      );
      return;
    }

    postSaleAppointment(
      {
        itemId,
        startDate: formatDate(startDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
        startLocation,
        price,
        tradeMethod,
      },
      {
        onSuccess: response => {
          navigate(`/pick-detail/${response.currentAppointment.appointment.appointmentId}`, { replace: true });
        },
      },
    );
  };

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
      if (itemData.itemInfo.salePrice) {
        setPrice(itemData.itemInfo.salePrice);
      } else {
        setPrice(itemData.itemInfo.rentalFee);
      }
      setDeposit(itemData.itemInfo.deposit);
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
            price={price}
            deposit={deposit}
            setPrice={setPrice}
            setDeposit={setDeposit}
          />
          {tradeMethod === 'PARCEL' && <Caution />}
        </div>
        <div className={s.SaveButtonContainer}>
          <Btn mode={submitValidation ? 'main' : 'disabled'} onClick={handleSubmit}>
            저장하기
          </Btn>
        </div>
      </div>
    </SafeArea>
  );
};
export default PostPickPage;
