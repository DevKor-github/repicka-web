import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PatchAppointmentRequest {
  appointmentId: number;
  rentalLocation: string;
  returnLocation: string;
  rentalDate: string;
  returnDate: string;
  price: number;
  deposit: number;
}

const patchAppointment = async (data: PatchAppointmentRequest) => {
  const response = await client.patch('/api/v1/appointment/pending', data);
  return response.data.data;
};

export const usePatchAppointment = () => {
  return useMutation({
    mutationFn: patchAppointment,
  });
};
