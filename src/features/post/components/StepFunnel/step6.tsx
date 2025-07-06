// 아 판매인지, 대여인지, 판매 및 대여인지 구분해서 

import Token from '@/common/components/Token';
import * as s from './style.css';

const Rental = () => {
  return (
    <div className={s.PriceContent}>
      <div className={s.TokenContainer}>
        <Token>대여</Token>
      </div>
      <div className={s.HeaderInputField}>
        <span>대여료를 입력해 주세요</span>
        <div style={{
          width: '9.38394rem',
          height: '2.75rem',
          backgroundColor: '#2C2C2E',
          borderRadius: '0.375rem'
        }} />
        {/* TODO: 입력 필드로 고칠 것 */}
      </div>

      <div className={s.HeaderInputField}>
        <span>보증금을 입력해 주세요</span>
        <div style={{
          width: '9.38394rem',
          height: '2.75rem',
          backgroundColor: '#2C2C2E',
          borderRadius: '0.375rem'
        }}>
        </div>
      </div>
    </div>
  );
}

const Sale = () => {
  return (
    <div className={s.PriceContent}>
      <div className={s.TokenContainer}>
        <Token>판매</Token>
      </div>
      <div className={s.HeaderInputField}>
        <span>판매 금액을 입력해 주세요</span>
        <div style={{
          width: '9.38394rem',
          height: '2.75rem',
          backgroundColor: '#2C2C2E',
          borderRadius: '0.375rem'
        }}>
        </div>
      </div>
      <span className={s.CanDeal}>네고 제안 받을래요</span>
    </div>
  );
};

const Step6 = () => {
  return (
    <div>
      <header className={s.Head}>
        가격을 설정해 주세요
      </header>
      <div className={s.Content}>
        <Rental />
        <Sale />
      </div>
    </div>);
};
export default Step6;
