import { cx } from '@styled-system/css';
import * as s from './style.css';

interface TradeInfoProps {
  isSuccess: boolean;
  date: string;
}

const TradeInfo = ({ isSuccess, date }: TradeInfoProps) => {
  const label = isSuccess ? `${date} 거래 완료` : `${date} 거래 예정 상품`;

  return (
    <div className={s.Wrapper}>
      {!isSuccess && <div className={cx('mgc_t_shirt_fill', s.Icon)} />}
      <div className={s.TradeInfo}>
        <div>
          <div className={s.TradeDate({ isComplete: isSuccess })}>{label}</div>
        </div>
        {!isSuccess && <div className={s.InProgress}>거래진행중</div>}
      </div>
    </div>
  );
};

export default TradeInfo;
