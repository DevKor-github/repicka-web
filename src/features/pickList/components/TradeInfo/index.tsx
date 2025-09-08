import { cx } from '@styled-system/css';
import * as s from './style.css';

interface TradeInfoProps {
  isSuccess: boolean;
  isInProgress: boolean;
  date: string;
}

const TradeInfo = ({ isSuccess, isInProgress, date }: TradeInfoProps) => {
  const state = isSuccess ? `${date} 거래 완료` : `${date} 거래 예정 상품`;
  const label = isInProgress ? '거래진행중' : '거래예정'; // 거래 완료가 아닐 떄 띄우기

  return (
    <div className={s.Wrapper}>
      {!isSuccess && <div className={cx('mgc_t_shirt_fill', s.Icon)} />}
      <div className={s.TradeInfo}>
        <div>
          <div className={s.TradeDate({ isComplete: isSuccess })}>{state}</div>
        </div>
        {!isSuccess && <div className={s.InProgress}>{label}</div>}
      </div>
    </div>
  );
};

export default TradeInfo;
