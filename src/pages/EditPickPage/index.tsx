import { useNavigate, useParams } from 'react-router';

import { useGetPickDetail } from '@/features/pick/apis/useGetPickDetail';
import NotFoundPage from '@/pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { formatDate, isBefore } from 'date-fns';
import { usePatchAppointment } from '@/features/pick/apis/usePatchAppointment';

const EditPickPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isSuccess } = useGetPickDetail(Number(id));
  const { mutate: patchAppointment } = usePatchAppointment();

  const [price, setPrice] = useState<number>(NaN);
  const [deposit, setDeposit] = useState<number>(NaN);
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);

  const submitValidation = (() => {
    if (data?.type === 'RENTAL') {
      if (data.tradeMethod === 'DIRECT') {
        return startLocation && endLocation && startDateTime && endDateTime ? true : false;
      }

      return startDateTime && endDateTime ? true : false;
    }

    if (data?.tradeMethod === 'DIRECT') return startLocation && startDateTime ? true : false;

    return startDateTime ? true : false;
  })();

  const handleSubmit = () => {
    if (!submitValidation) return;

    if (data?.type === 'RENTAL') {
      if (isBefore(endDateTime as Date, startDateTime as Date)) {
        alert('대여 일시는 반납 일시보다 이전이어야 합니다.');
        return;
      }

      if (isBefore(startDateTime as Date, new Date())) {
        alert('대여 일시는 현재 시간보다 이후여야 합니다.');
        return;
      }

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
          onSuccess: response => {
            navigate(`/pick-detail/${response.currentAppointment.appointment.appointmentId}`, { replace: true });
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
        returnDate: formatDate(endDateTime as Date, "yyyy-MM-dd'T'HH:mm:ss"),
        rentalLocation: startLocation,
        returnLocation: endLocation,
        price,
        deposit,
      },
      {
        onSuccess: response => {
          navigate(`/pick-detail/${response.currentAppointment.appointment.appointmentId}`, { replace: true });
        },
        onError: error => alert(error.message),
      },
    );
  };

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

  if (isError) return <NotFoundPage />;

  if (data === undefined) return null;

  return <div>EditPickPage</div>;
};
export default EditPickPage;
