import { cx } from '@styled-system/css';
import * as s from './style.css';

interface TradeInfoProps {
  isComplete: boolean;
  date: string;
}

const TradeInfo = ({ isComplete, date }: TradeInfoProps) => {
  const label = isComplete ? `${date} 거래 완료` : `${date} 거래 예정 상품`;

  return (
    <div className={s.Wrapper}>
      {!isComplete && <div className={cx('mgc_t_shirt_fill', s.Icon)} />}
      <div className={s.TradeInfo}>
        <div>
          <div className={s.TradeDate({ isComplete: isComplete })}>{label}</div>
        </div>
        {!isComplete && <div className={s.InProgress}>거래진행중</div>}
      </div>
    </div>
  );
};

export default TradeInfo;
