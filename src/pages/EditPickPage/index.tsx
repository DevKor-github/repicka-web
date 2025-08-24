import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { formatDate } from 'date-fns';

import * as s from './style.css';

import { useGetPickDetail } from '@/features/pick/apis/useGetPickDetail';
import NotFoundPage from '@/pages/NotFoundPage';
import { usePatchAppointment } from '@/features/pick/apis/usePatchAppointment';
import checkValidation from '@/features/pick/utils/checkValidation';
import handleSubmitEdgeCase from '@/features/pick/utils/handelSubmitEdgeCase';
import SafeArea from '@/common/components/SafeArea';
import CustomHeader from '@/common/components/CustomHeader';
import useGetItemDetail from '@/features/detail/apis/useGetItemDetail';
import ItemCard from '@/features/home/components/ItemCard';
import PlaceBox from '@/features/pick/components/PlaceBox';
import DateTimeBox from '@/features/pick/components/DateTimeBox';
import PriceBox from '@/features/pick/components/PriceBox';
import Btn from '@/common/components/Button';
import getItemInterfaceFromItemDetail from '@/common/utils/getItemInterfaceFromItemDetail';
import Caution from '@/features/pick/components/Caution';
import comparePickData from '@/features/pick/utils/comparePickData';

const EditPickPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pickId = Number(id);
  const { data, isLoading, isError, isSuccess } = useGetPickDetail(pickId);
  const { data: itemData, isLoading: isItemDetailLoading } = useGetItemDetail(data?.itemId);
  const { mutate: patchAppointment } = usePatchAppointment();

  const [price, setPrice] = useState<number>(NaN);
  const [deposit, setDeposit] = useState<number>(NaN);
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);

  useEffect(() => {
    // 초기값 설정
    if (isSuccess) {
      setStartLocation(data.rentalLocation);
      setEndLocation(data.returnLocation || '');
      setStartDateTime(new Date(data.rentalDate));
      setEndDateTime(data.returnDate ? new Date(data.returnDate) : null);
      setPrice(data.price);
      setDeposit(data.deposit);
    }
  }, [data, isSuccess]);

  if (isLoading || isItemDetailLoading) return null;

  if (data === undefined || itemData === undefined || isError) return <NotFoundPage />;

  const submitValidation = checkValidation({
    transactionType: data.type,
    tradeMethod: data.tradeMethod,
    startLocation,
    endLocation,
    startDateTime,
    endDateTime,
  });

  const handleSubmit = () => {
    if (!submitValidation) return;

    if (!handleSubmitEdgeCase({ transactionType: data.type, startDateTime, endDateTime })) return;

    if (
      comparePickData(data, {
        type: data.type,
        rentalDate: formatDate(startDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
        returnDate: formatDate(endDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
        rentalLocation: startLocation,
        returnLocation: endLocation,
        price,
        deposit,
      })
    ) {
      navigate(-1);
      return;
    }

    if (data.type === 'RENTAL') {
      patchAppointment(
        {
          appointmentId: Number(id),
          rentalDate: formatDate(startDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
          returnDate: formatDate(endDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
          rentalLocation: startLocation,
          returnLocation: endLocation,
          price,
          deposit,
        },
        {
          onSuccess: () => {
            navigate(-1);
          },
          onError: error => {
            alert(error.message);
          },
        },
      );
      return;
    }

    patchAppointment(
      {
        appointmentId: Number(id),
        rentalDate: formatDate(startDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
        rentalLocation: startLocation,
        price,
        deposit,
      },
      {
        onSuccess: () => {
          navigate(-1);
        },
        onError: error => {
          alert(error.message);
        },
      },
    );
  };

  return (
    <SafeArea>
      <div className={s.Wrapper}>
        <CustomHeader title="PICK 수정" onClick={() => navigate(-1)} />
        <div className={s.Container}>
          <div className={s.ItemContainer}>
            <ItemCard data={getItemInterfaceFromItemDetail(itemData)} />
          </div>
          {data.tradeMethod === 'DIRECT' && (
            <PlaceBox
              transactionType={data.type}
              startLocation={startLocation}
              endLocation={endLocation}
              setStartLocation={setStartLocation}
              setEndLocation={setEndLocation}
              startPlaceholder={itemData.itemInfo.location}
              endPlaceholder={itemData.itemInfo.location}
            />
          )}
          <DateTimeBox
            transactionType={data.type}
            tradeMethod={data.tradeMethod}
            startDateTime={startDateTime}
            endDateTime={endDateTime}
            setStartDateTime={setStartDateTime}
            setEndDateTime={setEndDateTime}
          />
          <PriceBox
            itemInfo={itemData.itemInfo}
            transactionType={data.type}
            price={price}
            deposit={deposit}
            setPrice={setPrice}
            setDeposit={setDeposit}
          />
          {data.tradeMethod === 'PARCEL' && <Caution />}
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
export default EditPickPage;
