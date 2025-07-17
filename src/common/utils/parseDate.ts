import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';

export const parseDate = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'yyyy-MM-dd');
};

export const parseTime = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'a h:mm', { locale: ko });
};
