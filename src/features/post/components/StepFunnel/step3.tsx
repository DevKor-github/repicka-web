import Chip from '@/common/components/Chip';
import * as s from './style.css';
import { TRADE_TYPES_MAP, type TradeType } from '@/libs/types/post';
import Token from '@/common/components/Token';

const Step3 = () => {
  return (
    <div>
      <header className={s.Head}>
        거래 방식을 선택해 주세요
      </header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          <div className={s.ContentHeader}>
            거래 방식을 선택해 주세요
            <Token>복수 선택 가능</Token>
          </div>
          <div className={s.ChipColumn}>
            {(Object.entries(TRADE_TYPES_MAP) as [TradeType, string][])
              .filter(([key]) => key !== 'DIRECT_AND_PARCEL')
              .map(([key, label]) => (
                <Chip key={key}>{label}</Chip>
              ))}
          </div>
        </div>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            <span>직거래 장소를 입력해 주세요</span>
            <div style={{
              width: '100%',
              height: '2.75rem',
              backgroundColor: '#2C2C2E',
              borderRadius: '0.375rem'
            }} />
            {/* TODO: 입력 필드로 고칠 것 */}
          </div>
        </div>
      </div>
    </div>);

};

export default Step3;
