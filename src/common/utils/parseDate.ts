import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';

export const parseChatDate = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'yyyy년 MM월 dd일 eeee', { locale: ko });
};

export const parsePickDate = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'yyyy. MM. dd. (eee)', { locale: ko });
};

export const parseTime = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'a h:mm', { locale: ko });
};

export const parsePickTime = (raw: string) => {
  const date = new Date(raw);
  return format(date, 'H:mm', { locale: ko });
};
